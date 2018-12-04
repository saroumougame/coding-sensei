<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ExerciceRepository")
 * @ORM\Table(name="exercice")
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $langagueSpecs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ExerciceGroupe", mappedBy="exercice")
     */
    private $exerciceGroupes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Correction", mappedBy="exercice")
     */
    private $correction;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Reponse", mappedBy="exercice")
     */
    private $reponse;

    public function __construct()
    {
        $this->exerciceGroupes = new ArrayCollection();
        $this->correction = new ArrayCollection();
        $this->reponse = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection|ExerciceGroupe[]
     */
    public function getExerciceGroupes(): Collection
    {
        return $this->exerciceGroupes;
    }

    public function addExerciceGroupe(ExerciceGroupe $exerciceGroupe): self
    {
        if (!$this->exerciceGroupes->contains($exerciceGroupe)) {
            $this->exerciceGroupes[] = $exerciceGroupe;
            $exerciceGroupe->setExercice($this);
        }

        return $this;
    }

    public function removeExerciceGroupe(ExerciceGroupe $exerciceGroupe): self
    {
        if ($this->exerciceGroupes->contains($exerciceGroupe)) {
            $this->exerciceGroupes->removeElement($exerciceGroupe);
            // set the owning side to null (unless already changed)
            if ($exerciceGroupe->getExercice() === $this) {
                $exerciceGroupe->setExercice(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Correction[]
     */
    public function getCorrection(): Collection
    {
        return $this->correction;
    }

    public function addCorrection(Correction $correction): self
    {
        if (!$this->correction->contains($correction)) {
            $this->correction[] = $correction;
            $correction->setExercice($this);
        }

        return $this;
    }

    public function removeCorrection(Correction $correction): self
    {
        if ($this->correction->contains($correction)) {
            $this->correction->removeElement($correction);
            // set the owning side to null (unless already changed)
            if ($correction->getExercice() === $this) {
                $correction->setExercice(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Reponse[]
     */
    public function getReponse(): Collection
    {
        return $this->reponse;
    }

    public function addReponse(Reponse $reponse): self
    {
        if (!$this->reponse->contains($reponse)) {
            $this->reponse[] = $reponse;
            $reponse->setExercice($this);
        }

        return $this;
    }

    public function removeReponse(Reponse $reponse): self
    {
        if ($this->reponse->contains($reponse)) {
            $this->reponse->removeElement($reponse);
            // set the owning side to null (unless already changed)
            if ($reponse->getExercice() === $this) {
                $reponse->setExercice(null);
            }
        }

        return $this;
    }
}
