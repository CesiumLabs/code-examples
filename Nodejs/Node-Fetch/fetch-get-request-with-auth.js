import fetch from "node-fetch";

const url = "https://api.snowflakedev.org/api/stats";

fetch(url, {
  method: "GET",
  headers: {
    Authorization: "API_KEY" // Can be obtained from https://api.snowflakedev.org/dashboard (This example will use snowflakedev's API.)
  }
}).then((response) => {
  if (response.ok)
    // Checks if the response's status was 200 (OK).
    response.json().then(console.log);
  // Logs data to console.
  else console.log("Response failed...");
});
