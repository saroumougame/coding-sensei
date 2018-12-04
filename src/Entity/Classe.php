<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ClasseRepository")
 */
class Classe
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
    private $teacherId;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Promotion", inversedBy="classe")
     */
    private $promotion;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ExerciceGroupe", mappedBy="classe")
     */
    private $exerciceGroupe;

    public function __construct()
    {
        $this->exerciceGroupe = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getTeacherId(): ?int
    {
        return $this->teacherId;
    }

    public function setTeacherId(int $teacherId): self
    {
        $this->teacherId = $teacherId;

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

    public function getPromotion(): ?Promotion
    {
        return $this->promotion;
    }

    public function setPromotion(?Promotion $promotion): self
    {
        $this->promotion = $promotion;

        return $this;
    }

    /**
     * @return Collection|ExerciceGroupe[]
     */
    public function getExerciceGroupe(): Collection
    {
        return $this->exerciceGroupe;
    }

    public function addExerciceGroupe(ExerciceGroupe $exerciceGroupe): self
    {
        if (!$this->exerciceGroupe->contains($exerciceGroupe)) {
            $this->exerciceGroupe[] = $exerciceGroupe;
            $exerciceGroupe->setClasse($this);
        }

        return $this;
    }

    public function removeExerciceGroupe(ExerciceGroupe $exerciceGroupe): self
    {
        if ($this->exerciceGroupe->contains($exerciceGroupe)) {
            $this->exerciceGroupe->removeElement($exerciceGroupe);
            // set the owning side to null (unless already changed)
            if ($exerciceGroupe->getClasse() === $this) {
                $exerciceGroupe->setClasse(null);
            }
        }

        return $this;
    }
}
