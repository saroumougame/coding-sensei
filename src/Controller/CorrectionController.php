<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 21/03/2019
 * Time: 22:04
 */

namespace App\Controller;


use App\Entity\Exercice;
use App\Entity\Reponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class CorrectionController extends AbstractController
{


    public function __invoke(Reponse $data)
    {


        $code = $data->getAwnserCode();

        $phpfunction = stripslashes(substr(base64_decode($code), 2, -2));


        $evalReponse = $this->compileProcedural($phpfunction);

        $correctionCode = $this->correctionCode($evalReponse);

        $this->majExoDb($data);

        $response = array("reponse" => $evalReponse);

        return $response;
    }



    private function compileProcedural($phpfunction){

        ob_start();
        $evalReponse = eval($phpfunction);
        $evalReponse = ob_get_contents();
        ob_clean();


        return $evalReponse;

    }


    private function compilefonction($phpfunction){


        ob_start();
        $evalReponse = eval($phpfunction);
        $evalReponse = ob_get_contents();
        ob_clean();

        $result = call_user_func('lol', 'toto');


        return $result;
    }


    private function majExoDb($dataExo)
    {
        $em = $this->getDoctrine()->getManager();
        $reponseExo = $this->getDoctrine()->getRepository(Reponse::class)->find($dataExo->getId());
        $reponseExo->setUser($reponseExo->getUser());
        $reponseExo->setExercice($reponseExo->getExercice());
        $reponseExo->setAwnserCode($dataExo->getAwnserCode());
        $em->persist($reponseExo);
        $em->flush();

    }



    private function correctionCode($result){

        return $result;

    }

}





//$phpfunction = '<? $array = array(\"1\" => \"PHP code tester Sandbox Online\",
//              \"foo\" => \"bar\", 5 , 5 => 89009,
//              \"case\" => \"Random Stuff: \" . rand(100,999),
//              \"PHP Version\" => phpversion()
//              );
//
//foreach( $array as $key => $value ){
//    echo $key.\"\t=>\t\".$value.\"\n\";
/*} ?>';*/
//
//$phpCode  = '<? function toto($arg){$array = array(\"1\" => \"PHP code tester Sandbox Online\",
//              \"foo\" => \"bar\", 5 , 5 => 89009,
//              \"case\" => \"Random Stuff: \" . rand(100,999),
//              \"PHP Version\" => phpversion()
//              );
//
//foreach( $array as $key => $value ){
//    echo $key.\"\t=>\t\".$value.\"\n\";
//    echo $arg;
//}
//
//}
//
//return call_user_func(\'toto\', \'test\');
/*?>';*/