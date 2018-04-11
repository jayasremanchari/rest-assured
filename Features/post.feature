Feature: Post Action Test
Description: This feature will post data to a URL and test the output



@PostTest
Scenario Outline: Valid Register to "https://reqres.in/api/register" 
	
	Given the api is up and running for "https://reqres.in"
	When the user performs posts request with "<email>""<pass>"   
	Then the Code Returned is "<code>"
	And the body includes the following "<field>"
		

	Examples:
	| email | pass | code | field |
	| Sydney@hmail | nabprep | 201 | token |
	| Sydney@hmail | | 400 | error | |
	



	
