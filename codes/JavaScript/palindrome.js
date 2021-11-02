let number1 = 15987;
let number2 = 36463;
let string1 = "Hello";
let string2 = "kayak";
let string3 = "kayAk";
let array1 = ["hello", 1, {}, 1, "hello"];
let array2 = ["Hello", 2, ["Hi"], 2, "hello"];

function isPalindrome(data, caseSensitive = false) {
	dataType = typeof data;
	if (dataType == "number") {
		return data == parseInt(data.toString().split("").reverse().join(""));
	} else if (dataType == "string") {
		let reversed = data.split("").reverse().join("");
		if (!caseSensitive) {
			reversed = reversed.toLowerCase();
			data = data.toLowerCase();
		}
		return data == reversed;
	} else if (Array.isArray(data)) {
		let reversed = data.slice().reverse();
		if (!caseSensitive) {
			reversed = reversed.map((value) => (typeof value == "string" ? value.toLowerCase() : value));
			data = data.map((value) => (typeof value == "string" ? value.toLowerCase() : value));
		}
		for (let i = 0; i < data.length; i++) {
			if (data[i] != reversed[i]) {
				return false;
			}
		}
		return true;
	}
}

console.log(`number1 ${isPalindrome(number1) ? "is" : "isn't"} a palindrome`);
console.log(`number2 ${isPalindrome(number2) ? "is" : "isn't"} a palindrome`);
console.log(`string1 ${isPalindrome(string1) ? "is" : "isn't"} a palindrome`);
console.log(`string2 ${isPalindrome(string2) ? "is" : "isn't"} a palindrome`);
console.log(`string3 ${isPalindrome(string3) ? "is" : "isn't"} a palindrome`);
console.log(`string3 ${isPalindrome(string3, true) ? "is" : "isn't"} a palindrome (case sensitive)`);
console.log(`array1 ${isPalindrome(array1) ? "is" : "isn't"} a palindrome`);
console.log(`array2 ${isPalindrome(array2) ? "is" : "isn't"} a palindrome`);
console.log(`array2 ${isPalindrome(array2, true) ? "is" : "isn't"} a palindrome (case sensitive)`);
