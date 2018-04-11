$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("get.feature");
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
  "duration": 501021556,
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
  "duration": 3002172552,
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
  "duration": 775209735,
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
  "duration": 4691511,
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
  "duration": 154096,
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
  "duration": 760978228,
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
  "duration": 472860569,
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
  "duration": 2158991,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_header_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 30092738,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 775513407,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 55970633,
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
  "name": "the user performs request with multivalue params \"\u003ccity1\u003e\"\"\u003ccity2\u003e\"\"\u003ccity3\u003e\"\"\u003capp_id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "the Status Code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "the response includes the following",
  "rows": [
    {
      "cells": [
        "list[0].weather[0].id",
        "500"
      ],
      "line": 56
    },
    {
      "cells": [
        "list[1].weather[0].id",
        "803"
      ],
      "line": 57
    },
    {
      "cells": [
        "list[2].weather[0].id",
        "804"
      ],
      "line": 58
    },
    {
      "cells": [
        "list[0].weather[0].main",
        "Rain"
      ],
      "line": 59
    },
    {
      "cells": [
        "list[1].weather[0].main",
        "Clouds"
      ],
      "line": 60
    },
    {
      "cells": [
        "list[2].weather[0].main",
        "Clouds"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;",
  "rows": [
    {
      "cells": [
        "city1",
        "city2",
        "city33",
        "app_id"
      ],
      "line": 64,
      "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;;1"
    },
    {
      "cells": [
        "12",
        "32",
        "15",
        "b6907d289e10d714a6e88b30761fae22"
      ],
      "line": 65,
      "id": "get-action-test;get-the-weather-details-using-multi-value-parameter;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 143413,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
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
  "name": "the user performs request with multivalue params \"12\"\"32\"\"\u003ccity3\u003e\"\"b6907d289e10d714a6e88b30761fae22\"",
  "matchedColumns": [
    0,
    1,
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
  "name": "the response includes the following",
  "rows": [
    {
      "cells": [
        "list[0].weather[0].id",
        "500"
      ],
      "line": 56
    },
    {
      "cells": [
        "list[1].weather[0].id",
        "803"
      ],
      "line": 57
    },
    {
      "cells": [
        "list[2].weather[0].id",
        "804"
      ],
      "line": 58
    },
    {
      "cells": [
        "list[0].weather[0].main",
        "Rain"
      ],
      "line": 59
    },
    {
      "cells": [
        "list[1].weather[0].main",
        "Clouds"
      ],
      "line": 60
    },
    {
      "cells": [
        "list[2].weather[0].main",
        "Clouds"
      ],
      "line": 61
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
  "duration": 742083151,
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
      "val": "\u003ccity3\u003e",
      "offset": 58
    },
    {
      "val": "b6907d289e10d714a6e88b30761fae22",
      "offset": 67
    }
  ],
  "location": "Steps.the_user_performs_request_with_multivalue_params(String,String,String,String)"
});
formatter.result({
  "duration": 602706588,
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
  "duration": 1769847,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 152944019,
  "status": "passed"
});
formatter.uri("post.feature");
formatter.feature({
  "line": 1,
  "name": "Post Action Test",
  "description": "Description: This feature will post data to a URL and test the output",
  "id": "post-action-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Register Details to \"https://reqres.in/\"",
  "description": "",
  "id": "post-action-test;register-details-to-\"https://reqres.in/\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@PostTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the api is up and running for \"https://reqres.in\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user performs posts request with \"\u003cemail\u003e\"\"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the Code Returned is 201",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the body includes the following",
  "rows": [
    {
      "cells": [
        "token"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "post-action-test;register-details-to-\"https://reqres.in/\";",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ],
      "line": 16,
      "id": "post-action-test;register-details-to-\"https://reqres.in/\";;1"
    },
    {
      "cells": [
        "Sydney@hmail",
        "nabprep"
      ],
      "line": 17,
      "id": "post-action-test;register-details-to-\"https://reqres.in/\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 78075,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Register Details to \"https://reqres.in/\"",
  "description": "",
  "id": "post-action-test;register-details-to-\"https://reqres.in/\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@PostTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the api is up and running for \"https://reqres.in\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the user performs posts request with \"Sydney@hmail\"\"nabprep\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the Code Returned is 201",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the body includes the following",
  "rows": [
    {
      "cells": [
        "token"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://reqres.in",
      "offset": 31
    }
  ],
  "location": "Steps.the_api_is_up_and_running_for(String)"
});
formatter.result({
  "duration": 855108846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney@hmail",
      "offset": 38
    },
    {
      "val": "nabprep",
      "offset": 52
    }
  ],
  "location": "Steps.the_user_performs_posts_request_with(String,String)"
});
formatter.result({
  "duration": 707131246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 21
    }
  ],
  "location": "Steps.the_Code_Returned_is(int)"
});
formatter.result({
  "duration": 3096718,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_body_includes_the_following(String\u003e)"
});
formatter.result({
  "duration": 75919318,
  "status": "passed"
});
});