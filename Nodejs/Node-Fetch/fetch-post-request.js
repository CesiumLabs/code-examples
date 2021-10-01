const fetch = require("node-fetch"); // Don't need for HTML Websites - This example uses node-fetch 2.x.

import fetch from "node-fetch"; // ESM Node-fetch.

const url = "https://api.example.com/v1/examples"; // API Endpoint URL
const exampleInteger = 10;
const exampleNumber = 10.5;
const exampleString = "Hello world!";
fetch(url, {
	method: "POST",
	headers: {
		Authorization: "API_KEY", // API KEY obtained from API Endpoint provider.
		"Content-Type": "application/json"
	},
	body: JSON.stringify({
		exampleInteger: exampleInteger,
		exampleNumber: exampleNumber,
		exampleString: exampleString
	})
}).then(async (res) => console.log(await res.json()));
