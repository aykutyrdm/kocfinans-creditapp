package com.koc.creditbackend.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.koc.creditbackend.exception.ResourceNotFoundException;
import com.koc.creditbackend.model.CreditRequest;
import com.koc.creditbackend.model.CreditScore;


@Component
public class CreditRequestServices {

	@Autowired(required=true)
	private CreditScoreServices creditScoreServices;
	
	public double retriveCreditConstant(double score) {
		
		if (score < 500) {
			return 0;
		}
		
		else if (score < 1000) {
			return 2;
		}
		
		else {
			return 4;
		}
	}
	
	public double calculateApproved(double constant, double salary) {
		
		if (constant == 2 && salary < 5000) {
			return 10000;
		}
		
		return constant * salary;
	
	}
	
	
	public CreditRequest serializeCreditRequest(String tc, String name, String phone, double salary) {
		
		CreditScore creditScore = creditScoreServices.retriveCreditScore(tc);
		
		if (creditScore == null) {
			throw new ResourceNotFoundException("Credit Score not exist with tc :" + tc);
		}
		
		double creditConstant = retriveCreditConstant(creditScore.getScore()); 
		
		double amount = this.calculateApproved(creditConstant, salary);
		
		boolean isApproved = creditConstant == Double.valueOf(0) ? false : true;
		
		CreditRequest creditRequest = new CreditRequest(creditScore, name, phone, salary, amount, isApproved);

		return creditRequest;
		
	}
}
