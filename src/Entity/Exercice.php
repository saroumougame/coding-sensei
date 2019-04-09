<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\ReponseUserController;

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
 *         "get_publication"={
 *         "method"="GET",
 *         "path"="/Exercice/{id}/user/reponse",
 *         "controller"=ReponseUserController::class,
 *     }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ExerciceRepository")
 */
class Exercice
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $inData;

    /**
     * @ORM\Column(type="json_array")
     */
    private $outData;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $langagueSpecs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ExerciceClasse", mappedBy="exercice")
     */
    private $exerciceClasses;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private  $fonction;


    public function getId(): ?int
    {
        return $this->id;
    }


    public function getInData()
    {
        return $this->inData;
    }

    public function setInData($inData): self
    {
        $this->inData = $inData;

        return $this;
    }

    public function getOutData()
    {
        return $this->outData;
    }

    public function setOutData($outData): self
    {
        $this->outData = $outData;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getLangagueSpecs()
    {
        return $this->langagueSpecs;
    }

    /**
     * @param mixed $langagueSpecs
     */
    public function setLangagueSpecs($langagueSpecs): void
    {
        $this->langagueSpecs = $langagueSpecs;
    }

    /**
     * @return mixed
     */
    public function getExerciceClasses()
    {
        return $this->exerciceClasses;
    }

    /**
     * @param mixed $exerciceClasses
     */
    public function setExerciceClasses($exerciceClasses): void
    {
        $this->exerciceClasses = $exerciceClasses;
    }

    /**
     * @return mixed
     */
    public function getFonction()
    {
        return $this->fonction;
    }

    /**
     * @param mixed $fonction
     */
    public function setFonction($fonction): void
    {
        $this->fonction = $fonction;
    }



}
