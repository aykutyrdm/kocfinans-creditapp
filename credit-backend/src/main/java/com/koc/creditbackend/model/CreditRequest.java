package com.koc.creditbackend.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.CascadeType;
import javax.persistence.Column;

@Entity
@Table(name = "credit_request")
public class CreditRequest {
	
	public interface ResponseView {};
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "credit_score_id", referencedColumnName = "id")
	private CreditScore creditScore;
	
	@Column(name = "name")
	private String name;
	

	@Column(name = "phone")
	private String phone;
	
	@Column(name = "salary")
	private double salary;
	
	@Column(name = "amount")
	private double amount;
	
	@Column(name = "is_approved")
	private boolean isApproved;
		
	public CreditRequest() {
		
	}

	public CreditRequest(CreditScore creditScore, String name, String phone, double salary, double amount, boolean isApproved) {
		super();
		this.creditScore = creditScore;
		this.name = name;
		this.phone = phone;
		this.salary = salary;
		this.amount = amount;
		this.isApproved = isApproved;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public CreditScore getCreditScore() {
		return creditScore;
	}

	public void setCreditScore(CreditScore creditScore) {
		this.creditScore = creditScore;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	@JsonView(ResponseView.class)
	public double getAmount() {
		return amount;
	}
	
	public void setAmount(double amount) {
		this.amount = amount;
	}

	@JsonView(ResponseView.class)
	public boolean isApproved() {
		return isApproved;
	}
	
	public void setApproved(boolean isApproved) {
		this.isApproved = isApproved;
	}

}
