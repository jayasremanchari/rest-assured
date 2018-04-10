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
	

@GetTest
Scenario Outline: Get the weather details 
	
	Given the api is up and running for "http://openweathermap.org/current"
	When the user performs getparam request with "<city_name>" "<app_id>"   
	Then the Status Code is 200
	And the response includes the following
	| id | 2643743 |
	| name | London |
	And the response includes the following in any order
	| weather.id | 300 |
	| weather.main | Drizzle |
	| weather.description | light intensity drizzle |
	| visibility | 10000 |
	
		 
	
	Examples:
	| city_name | app_id |
	| London | b6907d289e10d714a6e88b30761fae22 |

		
	
	  
