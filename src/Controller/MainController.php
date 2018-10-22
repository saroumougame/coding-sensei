<?php
// src/Controller/MainControllerphp
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MainController extends AbstractController
{

    public function MainAction()
    {
        return $this->render("base.html.twig");
    }
}