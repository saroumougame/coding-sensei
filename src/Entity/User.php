<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 22/10/2018
 * Time: 19:18
 */


namespace App\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ApiResource
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Reponse", inversedBy="user")
     */
    private $reponse;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Notation", inversedBy="user")
     */
    private $notation;

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }

    public function getReponse(): ?Reponse
    {
        return $this->reponse;
    }

    public function setReponse(?Reponse $reponse): self
    {
        $this->reponse = $reponse;

        return $this;
    }

    public function getNotation(): ?Notation
    {
        return $this->notation;
    }

    public function setNotation(?Notation $notation): self
    {
        $this->notation = $notation;

        return $this;
    }
}