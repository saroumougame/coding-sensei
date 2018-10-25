<?php

namespace App\Repository;

use App\Entity\ExerciceGroupe;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ExerciceGroupe|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExerciceGroupe|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExerciceGroupe[]    findAll()
 * @method ExerciceGroupe[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExerciceGroupeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ExerciceGroupe::class);
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
