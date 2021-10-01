const fetch = require('node-fetch'); // Don't need for HTML Websites.

const url = "https://api.example.com/v1/examples" // API Endpoint URL
fetch(url, {
    method: "GET",
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

import fetch from "node-fetch";

const url = "https://api.example.com/v1/examples";

fetch(url).then((response) => {
    if (response.ok) // Checks if the response's status was 200 (OK).
        response.json().then(console.log); // Logs data to console.
    else console.log("Response failed...");
});
