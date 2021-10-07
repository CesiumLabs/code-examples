const friends = {
	hi: {
		name: "Hi"
	},
	hello: {
		age: 50
	}
};

console.log(friends?.hi?.name);
// -> Hi

console.log(friends.hi.age);
// -> Error

console.log(friends?.hi?.age ?? "???");
// -> ???
