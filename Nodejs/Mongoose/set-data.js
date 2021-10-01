const model = require('./mongoose-model');

new model({
	_id: 'model1',
	age: null, // this can be not specified at all and the value will still be set to 0, since the default value is 0 in the model
}).save(); // saves the model

model
	.create({
		_id: 'model2',
		age: 15,
	})
	.then(console.log); // creates a model and logs to the console
