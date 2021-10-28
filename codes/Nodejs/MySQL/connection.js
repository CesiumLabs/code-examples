// npm i mysql2
const { createConnection } = require("mysql2"); // Require createConnection method
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require("./config.json"); // .env can be used too

let con = createConnection({
	// create a connection with the database
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASS,
	database: DB_NAME
});

con.connect((err) => {
	// Connect the connection
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to MySQL");
	}
});

module.exports = { con }; // Exports the connection
