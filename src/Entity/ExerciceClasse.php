<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use App\Controller\ExerciceClassesController;
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
 *         "post_publication"={
 *         "method"="GET",
 *         "path"="/classes/{id}/exercices",
 *         "controller"=ExerciceClassesController::class,
 *       "swagger_context" = {
 *          "summary" = "RETOURNE LES EXERCICE DUNE classe donner ",
 *     }
 *     }
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ExerciceClasseRepository")
 */
class ExerciceClasse
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Classe", inversedBy="exerciceClasse")
     */
    private $classe;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Exercice", inversedBy="exerciceClasse")
     */
    private $exercice;

    public function getId(): ?int
    {
        return $this->id;
    }

    

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getClasse(): ?Classe
    {
        return $this->classe;
    }

    public function setClasse(?Classe $classe): self
    {
        $this->classe = $classe;

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



}
