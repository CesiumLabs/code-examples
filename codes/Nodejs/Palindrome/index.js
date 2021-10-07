const readline = require("node:readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter a word: ", (answer) => {
	if (!answer) return console.log("Input received no value :(");

	const reversed = answer.split("").reverse().join("");

	console.log(`Input: ${answer}`);
	console.log(`Output: ${reversed}`);
	console.log(`Palindrome: ${answer.toLowerCase() === reversed.toLowerCase() ? "✅" : "❌"}`);

	rl.close();
});
