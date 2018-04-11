Feature: Post Action Test
Description: This feature will post data to a URL and test the output



@PostTest
Scenario Outline: Register Details to "https://reqres.in/api/register" 
	
	Given the api is up and running for "https://reqres.in"
	When the user performs posts request with "<email>""<pass>"   
	Then the Code Returned is 201
	And the body includes the following
	| token |	

	Examples:
	| email | pass |
	| Sydney@hmail | nabprep |
	

	
