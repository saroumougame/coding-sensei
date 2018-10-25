<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PromotionRepository")
 */
class Promotion
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $shoolId;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getShoolId(): ?int
    {
        return $this->shoolId;
    }

    public function setShoolId(?int $shoolId): self
    {
        $this->shoolId = $shoolId;

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
}
