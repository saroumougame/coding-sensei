<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 21/03/2019
 * Time: 22:04
 */

namespace App\Controller;


use App\Entity\Classe;
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
use App\Entity\User;
use App\Entity\Eleve;

class UserExercicesController extends AbstractController
{

    public function __invoke(User $data) // retourn la reponse d'un user en fonfction d'un exercice
    {

// en attente de l'auten;
        $classe = $this->getDoctrine()->getRepository(Eleve::class)->findOneBy(array("user" => $data->getId())); // $user->getId()



        if (is_null($classe)){

            $exo = array("message" => "le user ne fait partie daucune classe c peut etre pas un eleve");

        }else{

            $reponse = $this->getDoctrine()->getRepository(ExerciceClasse::class)->findBy(array("classe" => $classe->getClasse()->getId()));


            $exo = array();

            foreach ($reponse as $exercice){

                $exercices = $exercice->getExercice();

                array_push($exo, $exercices);

            }

        }


        return $exo;
    }


}