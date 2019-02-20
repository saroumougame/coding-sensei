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
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $inData;

    /**
     * @ORM\Column(type="json_array")
     */
    private $outData;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Exercice", inversedBy="correction")
     */
    private $exercice;

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
