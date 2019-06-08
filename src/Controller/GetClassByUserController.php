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


class GetClassByUserController extends AbstractController
{

    public function __invoke(User $data) 
    {


        $classe = $this->getDoctrine()->getRepository(Classe::class)->findBy(array("teacher" => $data->getId()));
        
        return $classe;
    }


}