// Program demonstrating Object destructuring in Javascript

const obj = {
	name: "Vaibhav",
	address: {
		country: "India",
		city: "Jaipur"
	}
};

const greetUser = ({ name, address: { country } }) => {
	console.log(`Hello to ${name} from ${country}`);
};

greetUser(obj);
