package stepDefinitions;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {

		Customer cust;
		private RequestSpecification request;
		private Response response;
		
		

		@Before
	    public void setup (){

			RestAssured.baseURI = "http://parabank.parasoft.com/parabank/services/bank/customers";
			request = RestAssured.given();
			cust = new Customer();
	    }
		
		@When("^the user retrieves the details of the \"([^\"]*)\"$")
		public void the_user_retrieves_the_details_of_the(String cust_id)  {
		  
			response = request.when().get("/"+cust_id);
			response.then().log().all();
			
		}
		
		@Given("^a book exists  with a customer id of \"([^\"]*)\"$")
		public void a_book_exists_with_a_customer_id_of(String arg1)  {
		   
		}

		@When("^the user retrieves the details of the customer$")
		public void the_user_retrieves_the_details_of_the_customer()  {
		    
		}

		@Then("^the Status Code is (\\d+)$")
		public void the_Status_Code_is(int status_code)  {
			//Assert.assertEquals(200,response.getStatusCode());
			response.then().statusCode(status_code);
		}

		
		
		
}		
	


