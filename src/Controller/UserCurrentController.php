<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 21/03/2019
 * Time: 22:04
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\User;
use App\Entity\Eleve;

class UserCurrentController extends AbstractController
{

    public function __invoke()
    {

//       $user = $this->getUser();


//        dump($user);

     //   dump('totot');

        $response = array("reponse" => 'toto');


        return 0;

    }


}