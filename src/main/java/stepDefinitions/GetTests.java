package stepDefinitions;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;

public class GetTests {

	String baseURI;
	RequestSpecification request;
	ValidatableResponse response;
	public GetTests(String base) {
		baseURI = base;
	}
	public void apiRunTest(String url) {
		response = given().when().get(url).then();
		response.assertThat().statusCode(200);

		
	}
	public void getCustDetails(String cust_id) {
		response = given().when().get("http://parabank.parasoft.com/parabank/services/bank/customers"+"/"+cust_id ).then();
		
	}
	public void ValidateStatusCode(int status_code) {
		
		response.assertThat().statusCode(status_code);
		
	}
	public void headerCheck(Map<String, String> responseFields) {
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				response.header(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				response.header(field.getKey(), equalTo(field.getValue()));
			}
		}
		
	}
	public void getParamRequest(String city_name, String app_id) {

		response= given().param("q",city_name).param("appid",app_id)
		.when().get(baseURI).then();
		
	}
	public void getTestWithMultiValueParams(String p1, String p2, String p3,
			String app_id) {
		 response= given().param("bbox",p1,p2,p3).param("appid",app_id)
					.when().get("http://samples.openweathermap.org/data/2.5/box/city").then();
		
	}
	public void responseBodyCheckSingleFields(Map<String, String> responseFields) {
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				response.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				response.body(field.getKey(), equalTo(field.getValue()));
			}
		}
		
	}
	public void responseBodyCheckArrayFields(Map<String, String> responseFields) {
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
