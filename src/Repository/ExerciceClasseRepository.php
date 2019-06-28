<?php

namespace App\Repository;

use App\Entity\ExerciceClasse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ExerciceClasse|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExerciceClasse|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExerciceClasse[]    findAll()
 * @method ExerciceClasse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExerciceClasseRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ExerciceClasse::class);
    }

//    /**
//     * @return ExerciceGroupe[] Returns an array of ExerciceGroupe objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExerciceGroupe
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
