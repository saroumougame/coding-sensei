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
use App\Service\MailService;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\LcobucciJWTEncoder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\User;
use App\Entity\Eleve;
use Symfony\Component\HttpFoundation\JsonResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;


class GetClassByUserController extends AbstractController
{

    public function __invoke(User $data) 
    {


      $mail = new MailService(\swith_mail);

        $statuemail = $mail->notificationMail('tototo', 'sridar.aroumougame@gmail.com');

        $token = $this->get('security.token_storage')->getToken();

//     $decodeToken =  $jwtEncoder->decode($token);

return $statuemail;
//        $currentToken



//$user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['username' => $username]);
//
//        dump($user);
//
//        $classe = $this->getDoctrine()->getRepository(Classe::class)->findBy(array("teacher" => $data->getId()));

//        return $user;

//
//        if (!$this->container->has('security.token_storage')) {
//            throw new \LogicException('The Security Bundle is not registered in your application.');
//        }
//        if (null === $token = $this->container->get('security.token_storage')->getToken()) {
//            return;
//        }
//        if (!is_object($user = $token->getUser())) {
//            // e.g. anonymous authentication
//            return;
//        }
//        return $user;


//
//        return new JsonResponse(['user' => $currentToken->getUser()]);
//        if (is_object($currentToken->getUser())) {
//            // Do your logic with the current user
//            return new JsonResponse(['user' => $currentToken->getUser()->getUsername()]);
//        } else {
//            return new JsonResponse(['user' => 'Anonymous']);
//        }

    }


}