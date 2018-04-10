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
  "name": "Get the weather details",
  "description": "",
  "id": "get-action-test;get-the-weather-details",
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
  "name": "the api is up and running for \"http://parabank.parasoft.com/parabank/services\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user performs get request to \"\u003ccustomer_id\u003e\"",
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
  "id": "get-action-test;get-the-weather-details;",
  "rows": [
    {
      "cells": [
        "customer_id"
      ],
      "line": 15,
      "id": "get-action-test;get-the-weather-details;;1"
    },
    {
      "cells": [
        "12212"
      ],
      "line": 16,
      "id": "get-action-test;get-the-weather-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 439833428,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get the weather details",
  "description": "",
  "id": "get-action-test;get-the-weather-details;;2",
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
  "name": "the api is up and running for \"http://parabank.parasoft.com/parabank/services\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user performs get request to \"12212\"",
  "matchedColumns": [
    0
  ],
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
      "val": "http://parabank.parasoft.com/parabank/services",
      "offset": 31
    }
  ],
  "location": "Steps.the_api_is_up_and_running_for(String)"
});
formatter.result({
  "duration": 3987270828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12212",
      "offset": 34
    }
  ],
  "location": "Steps.the_user_performs_get_request_to(String)"
});
formatter.result({
  "duration": 810750494,
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
  "duration": 5001758,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Get the weather details using query params",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-query-params",
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
  "name": "the api is up and running for \"http://openweathermap.org/current\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user performs getparam request with \"\u003ccity_name\u003e\" \"\u003capp_id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the header includes the following",
  "rows": [
    {
      "cells": [
        "content-type",
        "application/json; charset\u003dutf-8"
      ],
      "line": 26
    },
    {
      "cells": [
        "content-encoding",
        "gzip"
      ],
      "line": 27
    },
    {
      "cells": [
        "server",
        "openresty/1.9.7.1"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "2643743"
      ],
      "line": 31
    },
    {
      "cells": [
        "name",
        "London"
      ],
      "line": 32
    },
    {
      "cells": [
        "visibility",
        "10000"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the response includes the following in any order",
  "rows": [
    {
      "cells": [
        "weather.id",
        "300"
      ],
      "line": 36
    },
    {
      "cells": [
        "weather.main",
        "Drizzle"
      ],
      "line": 37
    },
    {
      "cells": [
        "weather.description",
        "light intensity drizzle"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-query-params;",
  "rows": [
    {
      "cells": [
        "city_name",
        "app_id"
      ],
      "line": 42,
      "id": "get-action-test;get-the-weather-details-using-query-params;;1"
    },
    {
      "cells": [
        "London",
        "b6907d289e10d714a6e88b30761fae22"
      ],
      "line": 43,
      "id": "get-action-test;get-the-weather-details-using-query-params;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 154507,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Get the weather details using query params",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-query-params;;2",
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
  "name": "the api is up and running for \"http://openweathermap.org/current\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user performs getparam request with \"London\" \"b6907d289e10d714a6e88b30761fae22\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the header includes the following",
  "rows": [
    {
      "cells": [
        "content-type",
        "application/json; charset\u003dutf-8"
      ],
      "line": 26
    },
    {
      "cells": [
        "content-encoding",
        "gzip"
      ],
      "line": 27
    },
    {
      "cells": [
        "server",
        "openresty/1.9.7.1"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "2643743"
      ],
      "line": 31
    },
    {
      "cells": [
        "name",
        "London"
      ],
      "line": 32
    },
    {
      "cells": [
        "visibility",
        "10000"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the response includes the following in any order",
  "rows": [
    {
      "cells": [
        "weather.id",
        "300"
      ],
      "line": 36
    },
    {
      "cells": [
        "weather.main",
        "Drizzle"
      ],
      "line": 37
    },
    {
      "cells": [
        "weather.description",
        "light intensity drizzle"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://openweathermap.org/current",
      "offset": 31
    }
  ],
  "location": "Steps.the_api_is_up_and_running_for(String)"
});
formatter.result({
  "duration": 1037924114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 41
    },
    {
      "val": "b6907d289e10d714a6e88b30761fae22",
      "offset": 50
    }
  ],
  "location": "Steps.the_user_performs_getparam_request_with(String,String)"
});
formatter.result({
  "duration": 501106617,
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
  "duration": 2076396,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_header_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 26250604,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 670330596,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 50544391,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Get the weather details using multi value parameter",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-multi-value-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@GetTest"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "the api is up and running for \"http://openweathermap.org/current\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the user performs request with multivalue params \"\u003cp1\u003e\"\"\u003cp2\u003e\"\"\u003cp3\u003e\"\"\u003capp_id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the response includes the following in any order",
  "rows": [
    {
      "cells": [
        "list[0].id",
        "2208791"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;",
  "rows": [
    {
      "cells": [
        "p1",
        "p2",
        "p3",
        "app_id"
      ],
      "line": 59,
      "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;;1"
    },
    {
      "cells": [
        "12",
        "32",
        "15",
        "b6907d289e10d714a6e88b30761fae22"
      ],
      "line": 60,
      "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 119168,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Get the weather details using multi value parameter",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@GetTest"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "the api is up and running for \"http://openweathermap.org/current\"",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the user performs request with multivalue params \"12\"\"32\"\"15\"\"b6907d289e10d714a6e88b30761fae22\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the response includes the following in any order",
  "rows": [
    {
      "cells": [
        "list[0].id",
        "2208791"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://openweathermap.org/current",
      "offset": 31
    }
  ],
  "location": "Steps.the_api_is_up_and_running_for(String)"
});
formatter.result({
  "duration": 761818977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 50
    },
    {
      "val": "32",
      "offset": 54
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "b6907d289e10d714a6e88b30761fae22",
      "offset": 62
    }
  ],
  "location": "Steps.the_user_performs_request_with_multivalue_params(String,String,String,String)"
});
formatter.result({
  "duration": 533418340,
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
  "duration": 1281259,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 132416755,
  "error_message": "java.lang.IllegalArgumentException: Cannot invoke method getAt() on null object\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrapNoCoerce.callConstructor(ConstructorSite.java:105)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:255)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getAsJsonObject(JSONAssertion.groovy:56)\r\n\tat io.restassured.internal.path.json.JSONAssertion$getAsJsonObject.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getResult(JSONAssertion.groovy:28)\r\n\tat io.restassured.internal.assertion.Assertion$getResult.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcher.validate(BodyMatcher.groovy:94)\r\n\tat io.restassured.assertion.BodyMatcher$validate$0.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcherGroup$_validate_closure2.doCall(BodyMatcherGroup.groovy:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:294)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.Closure.call(Closure.java:426)\r\n\tat groovy.lang.Closure.call(Closure.java:442)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3170)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3140)\r\n\tat org.codehaus.groovy.runtime.dgm$66.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce.invoke(PojoMetaMethodSite.java:274)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite.call(PojoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.assertion.BodyMatcherGroup.validate(BodyMatcherGroup.groovy:47)\r\n\tat io.restassured.assertion.BodyMatcherGroup$validate$3.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:438)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat stepDefinitions.Steps.the_response_includes_the_following_in_any_order(Steps.java:109)\r\n\tat ✽.And the response includes the following in any order(getCustDetails.feature:55)\r\nCaused by: java.lang.NullPointerException: Cannot invoke method getAt() on null object\r\n\tat org.codehaus.groovy.runtime.NullObject.invokeMethod(NullObject.java:91)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaClassSite.call(PogoMetaClassSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.NullCallSite.call(NullCallSite.java:35)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat Script1.run(Script1.groovy:1)\r\n\tat groovy.lang.GroovyShell.evaluate(GroovyShell.java:585)\r\n\tat groovy.lang.GroovyShell.evaluate(GroovyShell.java:623)\r\n\tat groovy.lang.GroovyShell.evaluate(GroovyShell.java:594)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrap.invoke(PogoMetaMethodSite.java:190)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.call(PogoMetaMethodSite.java:71)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.internal.path.json.JSONAssertion.eval(JSONAssertion.groovy:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getAsJsonObject(JSONAssertion.groovy:46)\r\n\tat io.restassured.internal.path.json.JSONAssertion$getAsJsonObject.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.path.json.JSONAssertion.getResult(JSONAssertion.groovy:28)\r\n\tat io.restassured.internal.assertion.Assertion$getResult.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcher.validate(BodyMatcher.groovy:94)\r\n\tat io.restassured.assertion.BodyMatcher$validate$0.call(Unknown Source)\r\n\tat io.restassured.assertion.BodyMatcherGroup$_validate_closure2.doCall(BodyMatcherGroup.groovy:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat org.codehaus.groovy.runtime.metaclass.ClosureMetaClass.invokeMethod(ClosureMetaClass.java:294)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.Closure.call(Closure.java:426)\r\n\tat groovy.lang.Closure.call(Closure.java:442)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3170)\r\n\tat org.codehaus.groovy.runtime.DefaultGroovyMethods.collect(DefaultGroovyMethods.java:3140)\r\n\tat org.codehaus.groovy.runtime.dgm$66.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite$PojoMetaMethodSiteNoUnwrapNoCoerce.invoke(PojoMetaMethodSite.java:274)\r\n\tat org.codehaus.groovy.runtime.callsite.PojoMetaMethodSite.call(PojoMetaMethodSite.java:56)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat io.restassured.assertion.BodyMatcherGroup.validate(BodyMatcherGroup.groovy:47)\r\n\tat io.restassured.assertion.BodyMatcherGroup$validate$3.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:438)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:613)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.content(ResponseSpecificationImpl.groovy:251)\r\n\tat io.restassured.specification.ResponseSpecification$content$1.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:234)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:268)\r\n\tat stepDefinitions.Steps.the_response_includes_the_following_in_any_order(Steps.java:109)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
});