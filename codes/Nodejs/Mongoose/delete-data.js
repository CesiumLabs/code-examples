const model = require("./mongoose-model");

model.findByIdAndDelete("someString").then(console.log); // finds a document by the id someString, and deletes it if found
model.findOneAndDelete({ age: 0 }).then(console.log); // finds a document which has the age value set to 0, and deletes it if found.
