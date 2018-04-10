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
  "name": "Get the customer details",
  "description": "",
  "id": "get-action-test;get-the-customer-details",
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
  "id": "get-action-test;get-the-customer-details;",
  "rows": [
    {
      "cells": [
        "customer_id"
      ],
      "line": 15,
      "id": "get-action-test;get-the-customer-details;;1"
    },
    {
      "cells": [
        "12212"
      ],
      "line": 16,
      "id": "get-action-test;get-the-customer-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 439381413,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get the customer details",
  "description": "",
  "id": "get-action-test;get-the-customer-details;;2",
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
  "duration": 2521563613,
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
  "duration": 636558863,
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
  "duration": 2127350,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Get the weather details",
  "description": "",
  "id": "get-action-test;get-the-weather-details",
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
  "name": "the response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "2643743"
      ],
      "line": 26
    },
    {
      "cells": [
        "name",
        "London"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the response includes the following in any order",
  "rows": [
    {
      "cells": [
        "weather.id",
        "300"
      ],
      "line": 29
    },
    {
      "cells": [
        "weather.main",
        "Drizzle"
      ],
      "line": 30
    },
    {
      "cells": [
        "weather.description",
        "light intensity drizzle"
      ],
      "line": 31
    },
    {
      "cells": [
        "visibility",
        "10000"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "get-action-test;get-the-weather-details;",
  "rows": [
    {
      "cells": [
        "city_name",
        "app_id"
      ],
      "line": 37,
      "id": "get-action-test;get-the-weather-details;;1"
    },
    {
      "cells": [
        "London",
        "b6907d289e10d714a6e88b30761fae22"
      ],
      "line": 38,
      "id": "get-action-test;get-the-weather-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 149576,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Get the weather details",
  "description": "",
  "id": "get-action-test;get-the-weather-details;;2",
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
  "name": "the response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "2643743"
      ],
      "line": 26
    },
    {
      "cells": [
        "name",
        "London"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the response includes the following in any order",
  "rows": [
    {
      "cells": [
        "weather.id",
        "300"
      ],
      "line": 29
    },
    {
      "cells": [
        "weather.main",
        "Drizzle"
      ],
      "line": 30
    },
    {
      "cells": [
        "weather.description",
        "light intensity drizzle"
      ],
      "line": 31
    },
    {
      "cells": [
        "visibility",
        "10000"
      ],
      "line": 32
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
  "duration": 1340470935,
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
  "duration": 867905409,
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
  "duration": 227651,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});