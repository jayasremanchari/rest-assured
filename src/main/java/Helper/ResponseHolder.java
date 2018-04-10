package Helper;

import io.restassured.http.Headers;
import io.restassured.response.Response;


public class ResponseHolder {

	
		private static Response response;
		private static String responseBody;
		private static Headers responseHeaders;
		private static int responseStatCode;
		public static Response getResponse() {
			return response;
		}
		public static void setResponse(Response response) {
			ResponseHolder.response = response;
		}
		public static String getResponseBody() {
			return responseBody;
		}
		public static void setResponseBody(String responseBody) {
			ResponseHolder.responseBody = responseBody;
		}
		public static Headers getResponseHeaders() {
			return responseHeaders;
		}
		public static void setResponseHeaders(Headers responseHeaders) {
			ResponseHolder.responseHeaders = responseHeaders;
		}
		public static int getResponseStatCode() {
			return responseStatCode;
		}
		public static void setResponseStatCode(int responseStatCode) {
			ResponseHolder.responseStatCode = responseStatCode;
		}
		
		
	

}
