<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\CorrectionRepository")
 */
class Correction
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
    private $ExerciceId;

    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $inData;

    /**
     * @ORM\Column(type="json_array")
     */
    private $outData;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExerciceId(): ?int
    {
        return $this->ExerciceId;
    }

    public function setExerciceId(int $ExerciceId): self
    {
        $this->ExerciceId = $ExerciceId;

        return $this;
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
}
