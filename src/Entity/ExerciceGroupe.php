<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ExerciceGroupeRepository")
 */
class ExerciceGroupe
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $exerciceId;

    /**
     * @ORM\Column(type="integer")
     */
    private $classeId;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExerciceId(): ?int
    {
        return $this->exerciceId;
    }

    public function setExerciceId(int $exerciceId): self
    {
        $this->exerciceId = $exerciceId;

        return $this;
    }

    public function getClasseId(): ?int
    {
        return $this->classeId;
    }

    public function setClasseId(int $classeId): self
    {
        $this->classeId = $classeId;

        return $this;
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
}
