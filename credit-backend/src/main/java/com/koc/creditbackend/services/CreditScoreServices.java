package com.koc.creditbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.koc.creditbackend.model.CreditScore;
import com.koc.creditbackend.repository.CreditScoreRepository;

@Component
public class CreditScoreServices {
	
	@Autowired(required=true)
	private CreditScoreRepository creditScoreRepository;
	
	public CreditScore retriveCreditScore(String tc) {
		
		for (CreditScore creditScore : creditScoreRepository.findAll()) {
			if (creditScore.getTc().equals(tc)) {
				return creditScore;
			}
		}
		return null;
		
	}	
}
