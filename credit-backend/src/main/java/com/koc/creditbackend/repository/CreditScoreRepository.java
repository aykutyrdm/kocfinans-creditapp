package com.koc.creditbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koc.creditbackend.model.CreditScore;

@Repository
public interface CreditScoreRepository extends JpaRepository<CreditScore, Long> {

}