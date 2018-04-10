$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getCustDetails.feature");
formatter.feature({
  "line": 1,
  "name": "Get Action Test",
  "description": "Description: This feature will get the REST API Url and tests",
  "id": "get-action-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Get the customer details for the given customer id",
  "description": "",
  "id": "get-action-test;get-the-customer-details-for-the-given-customer-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@GetTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "a book exists  with a customer id of \"\u003ccustomer_id\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user retrieves the details of the customer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;",
  "rows": [
    {
      "cells": [
        "customer_id"
      ],
      "line": 16,
      "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;;1"
    },
    {
      "cells": [
        "12212"
      ],
      "line": 17,
      "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 585222622,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get the customer details for the given customer id",
  "description": "",
  "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@GetTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "a book exists  with a customer id of \"12212\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user retrieves the details of the customer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12212",
      "offset": 38
    }
  ],
  "location": "Steps.a_book_exists_with_a_customer_id_of(String)"
});
formatter.result({
  "duration": 146128034,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_user_retrieves_the_details_of_the_customer()"
});
formatter.result({
  "duration": 38626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "Steps.the_Status_Code_is(int)"
});
formatter.result({
  "duration": 1541373,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.Steps.the_Status_Code_is(Steps.java:48)\r\n\tat ✽.Then the Status Code is 200(getCustDetails.feature:11)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Get the customer details for the given customer id",
  "description": "",
  "id": "get-action-test;get-the-customer-details-for-the-given-customer-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@GetTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the user retrieves the details of the \"\u003ccustomer_id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;",
  "rows": [
    {
      "cells": [
        "customer_id"
      ],
      "line": 28,
      "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;;1"
    },
    {
      "cells": [
        "12212"
      ],
      "line": 29,
      "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1047855,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Get the customer details for the given customer id",
  "description": "",
  "id": "get-action-test;get-the-customer-details-for-the-given-customer-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@GetTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the user retrieves the details of the \"12212\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12212",
      "offset": 39
    }
  ],
  "location": "Steps.the_user_retrieves_the_details_of_the(String)"
});
formatter.result({
  "duration": 3737302059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 19
    }
  ],
  "location": "Steps.the_Status_Code_is(int)"
});
formatter.result({
  "duration": 55998576,
  "status": "passed"
});
});