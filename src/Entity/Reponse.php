<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
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
     * @ORM\Column(type="integer")
     */
    private $studentId;

    /**
     * @ORM\Column(type="integer")
     */
    private $exerciceId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $awnserCode;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStudentId(): ?int
    {
        return $this->studentId;
    }

    public function setStudentId(int $studentId): self
    {
        $this->studentId = $studentId;

        return $this;
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

    public function getAwnserCode(): ?string
    {
        return $this->awnserCode;
    }

    public function setAwnserCode(?string $awnserCode): self
    {
        $this->awnserCode = $awnserCode;

        return $this;
    }
}
