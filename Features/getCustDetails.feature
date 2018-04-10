Feature: Get Action Test
Description: This feature will get the REST API Url and tests



@GetTest
Scenario Outline: Get the customer details for the given customer id
	
	Given a book exists  with a customer id of "<customer_id>"
	When the user retrieves the details of the customer  
	Then the Status Code is 200 
	
	
	Examples:
	
	| customer_id |
	| 12212 |

@GetTest
Scenario Outline: Get the customer details for the given customer id
	
	When the user retrieves the details of the "<customer_id>"  
	Then the Status Code is 200 
	
	
	Examples:
	
	| customer_id |
	| 12212 |
	
	
	  
