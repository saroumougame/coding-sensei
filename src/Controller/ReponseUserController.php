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

class ReponseUserController extends AbstractController
{

    public function __invoke(Exercice $data) // retourn la reponse d'un user en fonfction d'un exercice
    {

       $user = $this->getUser();
// en attente de l'auten;
        $user = $this->getDoctrine()->getRepository(User::class)->find($user->getId()); // $user->getId()

       // $user = $this->getUser();

        $reponse = $this->getDoctrine()->getRepository(Reponse::class)->findOneBy(array('exercice' => $data->getId(),'user' => $user->getId()));

        if (is_null($reponse)){


           $em = $this->getDoctrine()->getManager();
            $newReponse = new Reponse();
            $newReponse->setUser($user);
            $newReponse->setExercice($data);
            $em->persist($newReponse);
            $em->flush();

            return $newReponse;

        };


        return $reponse;
    }


}