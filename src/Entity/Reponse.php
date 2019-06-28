<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\CorrectionController;

/**
 * @ApiResource(
 *     collectionOperations={
 *         "get",
 *         "post",
 *     },
 *     itemOperations={
 *         "get",
 *          "delete",
 *          "put",
 *         "put_publication"={
 *         "method"="PUT",
 *         "path"="/reponse/{id}/exercice/correction",
 *         "controller"=CorrectionController::class,
 *     "swagger_context" = {
 *          "summary" = "Compile le code, le code doit etre passer en encode64 , recupere le hydra en cas derreur sinon retourn reponse et correctionCode",
 *     }
 *     }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ReponseRepository")
 */
class Reponse
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=5000, nullable=true)
     */
    private $awnserCode;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Exercice", inversedBy="reponse")
     */
    private $exercice;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="reponses")
     */
    private $user;


    public function __construct()
    {
        $this->user = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }



    public function getAwnserCode(): ?string
    {
        return $this->awnserCode;
    }

    public function setAwnserCode(?string $awnserCode): self
    {
        $this->awnserCode = $awnserCode;

        return $this;
    }

    public function getExercice(): ?Exercice
    {
        return $this->exercice;
    }

    public function setExercice(?Exercice $exercice): self
    {
        $this->exercice = $exercice;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }




}
