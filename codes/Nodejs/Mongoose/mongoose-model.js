const { Schema, model } = require("mongoose");

const schema = new Schema({
  _id: { type: String, default: "This is the default value." }, // this is used to identify the model, and fetch/set data, if no data is specified when the model is created "This is the default value" is set as the value.
  age: { type: Number, default: 0 }, // other fields can be defined aswell, this is just for demonstration, here, if no data is specified when the model is created, 0 is set as the value since its the default value.
});

module.exports = model("example-model", schema);
