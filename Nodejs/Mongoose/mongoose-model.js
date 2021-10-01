const { Schema, model } = require("mongoose"); // Install mongoose (npm i mongoose, yarn add mongoose, etc.) and import variables.

module.exports = model(
	"Example",
	new Schema({
		exampleString: { type: String, default: "Hello, this is the default string value." },
		exampleNumber: { type: Number, default: 0 } // This is the default number.
	})
);
