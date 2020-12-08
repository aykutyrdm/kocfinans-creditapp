package com.koc.creditbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import com.koc.creditbackend.repository.CreditRequestRepository;
import com.koc.creditbackend.services.CreditRequestServices;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.koc.creditbackend.model.CreditRequest;


@CrossOrigin
@RestController
@RequestMapping("api/v1/")
public class CreditRequestController {
	
	
	@Autowired(required=true)
	private CreditRequestRepository creditRequestRepository;
	
	@Autowired(required=true)
	private CreditRequestServices creditRequestServices;
	
	//Get all requests
	@GetMapping("/credit_request")
	public List<CreditRequest> getAllCreditRequests(){
		return creditRequestRepository.findAll();
	}
	
	//Create Request
	@PostMapping("/credit_request")
	@JsonView(CreditRequest.ResponseView.class)
	public CreditRequest createCreditRequest(@RequestBody ObjectNode objectNode) {
		CreditRequest creditRequest = creditRequestRepository.save(
			creditRequestServices.serializeCreditRequest(
					objectNode.get("tc").asText(),
					objectNode.get("name").asText(),
					objectNode.get("phone").asText(),
					objectNode.get("salary").asDouble(0)
			)
		);
		
		return creditRequest;
	}
	
}

