package stepDefinitions;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	
	RequestSpecification request;
	ValidatableResponse response;
	

	@Before
	public void setup() {

		baseURI = "http://samples.openweathermap.org/data/2.5/weather";

	}

	@Given("^the api is up and running for \"([^\"]*)\"$")
	public void the_api_is_up_and_running_for(String url) {
		response = given().when().get(url).then();
		response.assertThat().statusCode(200);
		

	}

	@When("^the user performs get request to \"([^\"]*)\"$")
	public void the_user_performs_get_request_to(String cust_id)  {
	  
		response = given().when().get("http://parabank.parasoft.com/parabank/services/bank/customers"+"/"+cust_id ).then();
		
		
	}
	
	@Then("^the Status Code is (\\d+)$")
	public void the_Status_Code_is(int status_code) {
		
		response.assertThat().statusCode(status_code);

	}
	
	@Then("^the header includes the following$")
	public void the_header_includes_the_following(Map<String,String> responseFields)  {
	 
		
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				response.header(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				response.header(field.getKey(), equalTo(field.getValue()));
			}
		}
	}
	
	@When("^the user performs getparam request with \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_user_performs_getparam_request_with(String city_name, String app_id)  {
	  
		response= given().param("q",city_name).param("appid",app_id)
		.when().get(baseURI).then();
		

	}
	
	@When("^the user performs request with multivalue params \"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"\"([^\"]*)\"$")
	public void the_user_performs_request_with_multivalue_params(String p1, String p2, String p3, String app_id) throws Throwable {
	    
		 response= given().param("bbox",p1,p2,p3).param("appid",app_id)
				.when().get("http://samples.openweathermap.org/data/2.5/box/city").then();
		
		
	}
	
	@Then("^the response includes the following$")
	public void the_response_includes_the_following(Map<String,String> responseFields)  {
		
		
		
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				response.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				response.body(field.getKey(), equalTo(field.getValue()));
			}
		}
		
	}
	

@Then("^the response includes the following in any order$")
public void the_response_includes_the_following_in_any_order(Map<String,String> responseFields)  {
    
	
	for (Map.Entry<String, String> field : responseFields.entrySet()) {
		if(StringUtils.isNumeric(field.getValue())){
			response.body(field.getKey(), containsInAnyOrder(Integer.parseInt(field.getValue())));
		}
		else{
			response.body(field.getKey(), containsInAnyOrder(field.getValue()));
		}
	}
}



	


}
