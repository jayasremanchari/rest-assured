Feature: Get Action Test
Description: This feature will get the REST API Url and tests



@GetTest
Scenario Outline: Get the weather details 
	
	Given the api is up and running for "http://parabank.parasoft.com/parabank/services"
	When the user performs get request to "<customer_id>"   
	Then the Status Code is 200
		 
	
	Examples:
	| customer_id |
	| 12212 |
	

@GetTest
Scenario Outline: Get the weather details using query params
	
	Given the api is up and running for "http://openweathermap.org/current"
	When the user performs getparam request with "<city_name>" "<app_id>"   
	Then the Status Code is 200
	And the header includes the following
	| content-type | application/json; charset=utf-8 |
	| content-encoding | gzip |
	| server | openresty/1.9.7.1 |
	
	And the response includes the following
	| id | 2643743 |
	| name | London |
	| visibility | 10000 |
	
	And the response includes the following in any order
	| weather.id | 300 |
	| weather.main | Drizzle |
	| weather.description | light intensity drizzle |
 
	
	Examples:
	| city_name | app_id |
	| London | b6907d289e10d714a6e88b30761fae22 |

		
	
	  
@GetTest
Scenario Outline: Get the weather details using multi value parameter

	Given the api is up and running for "http://openweathermap.org/current"
	When the user performs request with multivalue params "<p1>""<p2>""<p3>""<app_id>"
	Then the Status Code is 200
	
	And the response includes the following in any order
	| list[0].id | 2208791 |
	
	Examples:
	| p1 | p2 | p3 | app_id |
	| 12 | 32 | 15 | b6907d289e10d714a6e88b30761fae22 |
	
	
	
	
	
	
