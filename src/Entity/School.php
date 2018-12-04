<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\SchoolRepository")
 */
class School
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
     * @ORM\Column(type="integer")
     */
    private $adminUserId;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Promotion", mappedBy="school")
     */
    private $promotion;

    public function __construct()
    {
        $this->promotion = new ArrayCollection();
    }

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

    public function getAdminUserId(): ?int
    {
        return $this->adminUserId;
    }

    public function setAdminUserId(int $adminUserId): self
    {
        $this->adminUserId = $adminUserId;

        return $this;
    }

    /**
     * @return Collection|Promotion[]
     */
    public function getPromotion(): Collection
    {
        return $this->promotion;
    }

    public function addPromotion(Promotion $promotion): self
    {
        if (!$this->promotion->contains($promotion)) {
            $this->promotion[] = $promotion;
            $promotion->setSchool($this);
        }

        return $this;
    }

    public function removePromotion(Promotion $promotion): self
    {
        if ($this->promotion->contains($promotion)) {
            $this->promotion->removeElement($promotion);
            // set the owning side to null (unless already changed)
            if ($promotion->getSchool() === $this) {
                $promotion->setSchool(null);
            }
        }

        return $this;
    }
}
