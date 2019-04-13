<?php
/**
 * Created by PhpStorm.
 * User: sridar
 * Date: 22/10/2018
 * Time: 19:18
 */


namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use App\Controller\UserExercicesController;
/**
 * @ORM\Entity
 * @ApiResource(
 *     collectionOperations={
 *         "get",
 *         "post",
 *     },
 *     itemOperations={
 *         "get",
 *          "delete",
 *          "put",
 *         "get_publication"={
 *         "method"="GET",
 *         "path"="/user/{id}/exercices",
 *         "controller"=UserExercicesController::class,
 *     "swagger_context" = {
 *          "summary" = "RETOURNE LES EXERCICE DUN ELEVE DONNER APRES CA SERA CELUIS CONNECTER",
 *     }
 *     }
 *     },
 * )
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Notation", inversedBy="user")
     */
    private $notation;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Reponse", mappedBy="user")
     */
    private $reponses;

    public function __construct()
    {
        parent::__construct();
        $this->reponses = new ArrayCollection();
        // your own logic
    }


    public function getNotation(): ?Notation
    {
        return $this->notation;
    }

    public function setNotation(?Notation $notation): self
    {
        $this->notation = $notation;

        return $this;
    }

    /**
     * @return Collection|Reponse[]
     */
    public function getReponses(): Collection
    {
        return $this->reponses;
    }

    public function addReponse(Reponse $reponse): self
    {
        if (!$this->reponses->contains($reponse)) {
            $this->reponses[] = $reponse;
            $reponse->setUser($this);
        }

        return $this;
    }

    public function removeReponse(Reponse $reponse): self
    {
        if ($this->reponses->contains($reponse)) {
            $this->reponses->removeElement($reponse);
            // set the owning side to null (unless already changed)
            if ($reponse->getUser() === $this) {
                $reponse->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }



}