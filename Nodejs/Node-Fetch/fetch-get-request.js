import fetch from "node-fetch";

const url = "https://api.example.com/v1/examples";

fetch(url).then((response) => {
    if (response.ok) // Checks if the response's status was 200 (OK).
        response.json().then(console.log); // Logs data to console.
    else console.log("Response failed...");
});
