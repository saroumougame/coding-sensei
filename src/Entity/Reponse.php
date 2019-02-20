<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $awnserCode;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Exercice", inversedBy="reponse")
     */
    private $exercice;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="reponse")
     */
    private $user;

    public function __construct()
    {
        $this->user = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getExercice(): ?Exercice
    {
        return $this->exercice;
    }

    public function setExercice(?Exercice $exercice): self
    {
        $this->exercice = $exercice;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
            $user->setReponse($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->user->contains($user)) {
            $this->user->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getReponse() === $this) {
                $user->setReponse(null);
            }
        }

        return $this;
    }
}
