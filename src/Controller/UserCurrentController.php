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


class UserCurrentController extends AbstractController
{

    /**
     * @param User $data
     * @param JWTEncoderInterface $decodeToken
     * @return JWTEncoderInterface
     * @throws \Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTDecodeFailureException
     */
    public function __invoke(User $data, JWTEncoderInterface $decodeToken)
    {


        $token = $this->get('security.token_storage')->getToken()->getCredentials();

        $userCurent = $decodeToken->decode($token);

        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['username' => $userCurent['username']]);

        return $user;




    }


}