package stepDefinitions;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import io.restassured.response.Response;

import org.junit.Assert;

import Helper.ResponseHolder;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	
	private String url;
	Response response;
	ResponseHolder responseHolder;
	

	@Before
	public void setup() {

		baseURI = "http://parabank.parasoft.com/parabank/services/bank/customers";

	}

	@Given("^the api is up and running for \"([^\"]*)\"$")
	public void the_api_is_up_and_running_for(String url) {
		this.url = url;
		response = given().when().get(url);
		Assert.assertEquals(200, response.getStatusCode());
	}

	@When("^the user performs get request to \"([^\"]*)\"$")
	public void the_user_performs_get_request_to(String cust_id)  {
	  
		response = given().when().get(baseURI+"/"+cust_id );
		ResponseHolder.setResponseStatCode(response.getStatusCode());
		
	}
	
	@Then("^the Status Code is (\\d+)$")
	public void the_Status_Code_is(int status_code) {
		Assert.assertEquals(status_code, ResponseHolder.getResponseStatCode());

	}

}
