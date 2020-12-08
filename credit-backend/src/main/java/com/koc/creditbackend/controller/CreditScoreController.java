package com.koc.creditbackend.controller;


import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.koc.creditbackend.repository.CreditScoreRepository;
import com.koc.creditbackend.model.CreditScore;

@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class CreditScoreController {
	
	@Autowired(required=true)
	private CreditScoreRepository creditScoreRepository;
	
	//Get all scores
	@GetMapping("/credit_score")
	public List<CreditScore> getAllCreditScores(){
		return creditScoreRepository.findAll();
	}
	
	//Create Score
	@PostMapping("/credit_score")
	public CreditScore createCreditScore(@RequestBody CreditScore creditScore) {
		return creditScoreRepository.save(creditScore);
	}
}