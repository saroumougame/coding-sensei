<?php
/**
 * Created by PhpStorm.
 * User: skumb
 * Date: 23/01/2019
 * Time: 16:20
 */
namespace App\Service;

use App\Entity\User;



class MailService
{
    private $mailer;
    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }



    public function notificationMail($msg, $mailEleve)
    {

        $message = (new \Swift_Message('Coding-sensei creation compte'))
            ->setFrom('coding@sensei.com')
            ->setTo($mailEleve)
            ->addPart(
                $msg
            );
        return $this->mailer->send($message) > 0;
    }
}