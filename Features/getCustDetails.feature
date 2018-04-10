Feature: Get Action Test
Description: This feature will get the REST API Url and tests



@GetTest
Scenario Outline: Get the customer details 
	
	Given the api is up and running for "http://parabank.parasoft.com/parabank/services"
	When the user performs get request to "<customer_id>"   
	Then the Status Code is 200 
	
	Examples:
	| customer_id |
	| 12212 |
	

		
	
	  
