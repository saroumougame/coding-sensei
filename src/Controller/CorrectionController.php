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


public function __invoke($data){


    $phpCode = '<? $array = array(\"1\" => \"PHP code tester Sandbox Online\",  
              \"foo\" => \"bar\", 5 , 5 => 89009, 
              \"case\" => \"Random Stuff: \" . rand(100,999),
              \"PHP Version\" => phpversion()
              );
              
foreach( $array as $key => $value ){
    echo $key.\"\t=>\t\".$value.\"\n\";
} ?>';

    $phpfunction= '<? function toto($arg){$array = array(\"1\" => \"PHP code tester Sandbox Online\",  
              \"foo\" => \"bar\", 5 , 5 => 89009, 
              \"case\" => \"Random Stuff: \" . rand(100,999),
              \"PHP Version\" => phpversion()
              );
              
foreach( $array as $key => $value ){
    echo $key.\"\t=>\t\".$value.\"\n\";
    echo $arg;
} 

}

return call_user_func(\'toto\', \'test\');
?>';


    $data->getAwnserCode();

//    $error = set_error_handler('return 1 + 1 ;');
    $phpfunction = stripslashes(substr($phpfunction, 2, -2));

    ob_start();
    $evalReponse = eval($phpfunction);
    $evalReponse=ob_get_contents();
    ob_clean();


    $encoders = [new XmlEncoder(), new JsonEncoder()];
    $normalizers = [new ObjectNormalizer()];

    $serializer = new Serializer($normalizers, $encoders);



   $reponseExo = $this->getDoctrine()->getRepository(Reponse::class)->findAll();

$response = array("reponse" => $evalReponse);

    return $response;
}


}