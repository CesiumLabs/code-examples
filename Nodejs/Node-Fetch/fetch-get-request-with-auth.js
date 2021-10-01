const fetch = require('node-fetch'); // Don't need for HTML Websites.

const url = "https://api.snowflakedev.org/api/stats"
fetch(url, {
    method: "GET",
    headers: {
        "Authorization": "API_KEY" // Can be obtained from https://api.snowflakedev.org/dashboard (This example will use snowflakedev's API.)
    }
}).then(function (response) {
    if (response.ok) {
            // If the response went through and returns 200 OK
        response.json().then(function (data) {
            console.log(data); // Console logs data from api
        });
    } else {
        console.log("Response failed...");
    }
});