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
     * @ORM\OneToMany(targetEntity="App\Entity\ExerciceClasse", mappedBy="classe")
     */
    private $exerciceClasse;

    /**
     * @return mixed
     */
    public function getExerciceClasse()
    {
        return $this->exerciceClasse;
    }

    /**
     * @param mixed $exerciceClasse
     */
    public function setExerciceClasse($exerciceClasse): void
    {
        $this->exerciceClasse = $exerciceClasse;
    }

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Eleve", mappedBy="classe")
     */
    private $eleves;



    public function __construct()
    {
        $this->exerciceClasse = new ArrayCollection();
        $this->eleves = new ArrayCollection();
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

//    /**
//     * @return Collection|ExerciceClasse[]
//     */
//    public function getExerciceClasse(): Collection
//    {
//        return $this->ExerciceClasse;
//    }
//
//    public function addExerciceClasse(ExerciceClasse $exerciceClasse): self
//    {
//        if (!$this->exerciceClasse->contains($exerciceClasse)) {
//            $this->exerciceClasse[] = $exerciceClasse;
//            $exerciceClasse->setClasse($this);
//        }
//
//        return $this;
//    }
//
//    public function removeExerciceClasse(ExerciceClasse $exerciceClasse): self
//    {
//        if ($this->exerciceClasse->contains($exerciceClasse)) {
//            $this->exerciceClasse->removeElement($exerciceClasse);
//            // set the owning side to null (unless already changed)
//            if ($exerciceClasse->getClasse() === $this) {
//                $exerciceClasse->setClasse(null);
//            }
//        }
//
//        return $this;
//    }

    /**
     * @return Collection|Eleve[]
     */
    public function getEleves(): Collection
    {
        return $this->eleves;
    }

//    public function addElefe(Eleve $elefe): self
//    {
//        if (!$this->eleves->contains($elefe)) {
//            $this->eleves[] = $elefe;
//            $elefe->setClasse($this);
//        }
//
//        return $this;
//    }
//
//    public function removeElefe(Eleve $elefe): self
//    {
//        if ($this->eleves->contains($elefe)) {
//            $this->eleves->removeElement($elefe);
//            // set the owning side to null (unless already changed)
//            if ($elefe->getClasse() === $this) {
//                $elefe->setClasse(null);
//            }
//        }
//
//        return $this;
//    }

//





}
