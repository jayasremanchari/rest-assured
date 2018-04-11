package stepDefinitions;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Assert;

public class PostTests {

	
	JSONObject requestParams;
	ValidatableResponse json;
	Response response;
	RequestSpecification request;

	public PostTests(String base) {
		
	
		RestAssured.baseURI = base;
		
	}

	public void register(String email, String pass) throws JSONException {
		requestParams = new JSONObject();
		request = RestAssured.given();
		request.header("Content-Type","application/json");
		requestParams.put("email", email);
		requestParams.put("password", pass);
		request.body(requestParams.toString());
		response = request.post("/api/register");
	
		
	}

	public void ValidateStatusCode(int status_code) {
		
		response.then().assertThat().statusCode(status_code);
	}

	public void elementPresent(List<String> element) {
	
		Assert.assertNotNull(response.jsonPath().get(element.get(0)));
		
	}

}
