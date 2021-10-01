const model = require('./mongoose-model');

model.find({}).then(console.log); // returns all the documents in a collection
model.find({ age: 0 }).then(console.log); // returns all the documents which have their age value set to 0.
model.findById('someString').then(console.log); //  finding something by the id
model.findOne({ age: 0 }).then(console.log); // this returns a document which has the age value set to 0.
