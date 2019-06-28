<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 15/09/2018
 * Time: 16:12
 */

namespace App\Controller;

use App\Service\MailService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController
{


    public function index()
    {





        $number = random_int(0, 100);


        return $this->render('base.html.twig', [
            'number' => $number,
        ]);
    }

}