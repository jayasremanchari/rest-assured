package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.json.JSONException;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	
	GetTests getTest;
	PostTests postTest;
	

	@Before
	public void setup() {

		getTest = new GetTests("http://samples.openweathermap.org/data/2.5/weather");
		postTest = new PostTests("https://reqres.in");
		

	}

	@Given("^the api is up and running for \"([^\"]*)\"$")
	public void the_api_is_up_and_running_for(String url) {
		getTest.apiRunTest(url);		

	}

	@When("^the user performs get request to \"([^\"]*)\"$")
	public void the_user_performs_get_request_to(String cust_id)  {
	  
		getTest.getCustDetails(cust_id);
		
		
	}
	
	@When("^the user performs posts request with \"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_performs_posts_request_with(String email, String pass) {
	    
		try {
			postTest.register(email,pass);
		} catch (JSONException e) {
			System.out.println("Exception Caught in the_user_performs_posts_request_with !");
		}
	}
	
	@Then("^the Status Code is (\\d+)$")
	public void the_Status_Code_is(int status_code) {
		
		getTest.ValidateStatusCode(status_code);

	}
	
	@Then("^the Code Returned is \"([^\"]*)\"$")
	public void the_Code_Returned_is(int status_code)  {
	    postTest.ValidateStatusCode(status_code);
	}

	
	@Then("^the header includes the following$")
	public void the_header_includes_the_following(Map<String,String> responseFields)  {
	 
		
		getTest.headerCheck(responseFields);
	}
	
	@When("^the user performs getparam request with \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_user_performs_getparam_request_with(String city_name, String app_id)  {
	  
		getTest.getParamRequest(city_name,app_id);

	}
	
	@When("^the user performs request with multivalue params \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_performs_request_with_multivalue_params(String p1, String p2, String p3, String app_id) throws Throwable {
	    
		getTest.getTestWithMultiValueParams(p1,p2,p3,app_id);
		
		
	}
	
	@Then("^the response includes the following$")
	public void the_response_includes_the_following(Map<String,String> responseFields)  {
		
		
		
		getTest.responseBodyCheckSingleFields(responseFields);
		
	}
	

@Then("^the response includes the following in any order$")
public void the_response_includes_the_following_in_any_order(Map<String,String> responseFields)  {
    
	
	getTest.responseBodyCheckArrayFields(responseFields);
	
}

@Then("^the body includes the following \"([^\"]*)\"$")
public void the_body_includes_the_following(List<String> element) throws Throwable {
  
	postTest.elementPresent(element);
}


	


}
