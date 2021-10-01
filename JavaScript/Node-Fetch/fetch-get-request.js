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