const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.all("*", (req, res) => {
	res.status(404).send("Oops, looks like you got lost!");
});

app.listen(3000, () => console.log("HTTP server listening on port 3000!"));
