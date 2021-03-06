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
	When the user performs request with multivalue params "<city1>""<city2>""<city3>""<app_id>"
	Then the Status Code is 200
	
	And the response includes the following
	| list[0].weather[0].id | 500 |
	| list[1].weather[0].id | 803 |
	| list[2].weather[0].id | 804 |
	| list[0].weather[0].main | Rain |
	| list[1].weather[0].main | Clouds |
	| list[2].weather[0].main | Clouds |
	
	Examples:
	| city1 | city2 | city33 | app_id |
	| 12 | 32 | 15 | b6907d289e10d714a6e88b30761fae22 |
	
	
	
	
	
	
