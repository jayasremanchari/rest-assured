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
  "duration": 412770429,
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
  "duration": 2727178962,
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
  "duration": 850953178,
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
  "duration": 1500281,
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
  "duration": 50544,
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
  "duration": 1161387672,
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
  "duration": 744118454,
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
  "duration": 697337,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_header_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 9489863,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 755741420,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following_in_any_order(String,String\u003e)"
});
formatter.result({
  "duration": 74150293,
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
  "duration": 94102,
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
  "duration": 879904781,
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
  "duration": 542662471,
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
  "duration": 1274684,
  "status": "passed"
});
formatter.match({
  "location": "Steps.the_response_includes_the_following(String,String\u003e)"
});
formatter.result({
  "duration": 160243250,
  "status": "passed"
});
});