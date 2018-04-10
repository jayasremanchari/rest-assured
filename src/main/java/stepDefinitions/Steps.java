package stepDefinitions;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import org.junit.Assert;

import Helper.ResponseHolder;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	
	RequestSpecification request;
	Response response;
	ResponseHolder responseHolder;
	

	@Before
	public void setup() {

		baseURI = "http://samples.openweathermap.org/data/2.5/weathers";

	}

	@Given("^the api is up and running for \"([^\"]*)\"$")
	public void the_api_is_up_and_running_for(String url) {
		response = given().when().get(url);
		Assert.assertEquals(200, response.getStatusCode());
	}

	@When("^the user performs get request to \"([^\"]*)\"$")
	public void the_user_performs_get_request_to(String cust_id)  {
	  
		response = given().when().get("http://parabank.parasoft.com/parabank/services/bank/customers"+"/"+cust_id );
		ResponseHolder.setResponseStatCode(response.getStatusCode());
		
	}
	
	@Then("^the Status Code is (\\d+)$")
	public void the_Status_Code_is(int status_code) {
		Assert.assertEquals(status_code, ResponseHolder.getResponseStatCode());

	}
	
	@When("^the user performs getparam request with \"([^\"]*)\" \"([^\"]*)\"$")
	public void the_user_performs_getparam_request_with(String city_name, String app_id)  {
	  
		response= given().param("q"+ city_name).param("appid" + app_id)
		.when().get(baseURI);
		System.out.println("++++"+response.asString());

	}


}
