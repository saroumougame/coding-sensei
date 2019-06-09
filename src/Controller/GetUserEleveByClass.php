<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 21/03/2019
 * Time: 22:04
 */

namespace App\Controller;


use App\Entity\Exercice;
use App\Entity\ExerciceClasse;
use App\Entity\Reponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\Classe;
use App\Entity\User;
use App\Entity\Eleve;


class GetUserEleveByClass extends AbstractController
{

    public function __invoke(Classe $data) 
    {

    	$exist = $this->getDoctrine()->getRepository(Classe::class)->find($data);
        $classe = $this->getDoctrine()->getRepository(Eleve::class)->findBy(array("classe" => $data->getId()));


        if(!empty($classe)){
        	$eleves = $this->getDoctrine()->getRepository(Eleve::class)->findBy(array("classe" => $classe->getId()));

        	if(!empty($eleves)) {
        		$tabUser = array();
        		foreach ($eleves as $unEleve) {
        			var_dump($unEleve);
        			exit();
        		array_push($tabUser, $this->getDoctrine()->getRepository(User::class)->findBy(array("user" => $unEleve->getUser())));
        		}
        		return $tabUser;
        		
        	}
        	//return $eleves;
        }
        
        
        return $classe;
    }


}