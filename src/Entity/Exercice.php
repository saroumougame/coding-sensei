<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
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
     * @ORM\Column(type="integer")
     */
    private $classeId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $langagueSpecs;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLangagueSpecs()
    {
        return $this->langagueSpecs;
    }

    public function setLangagueSpecs($langagueSpecs): self
    {
        $this->langagueSpecs = $langagueSpecs;

        return $this;
    }
}
