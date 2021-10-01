// Given two strings, write a function to determine
// if the second string is an anagram of the first.
// Anagaram - Word/phrase/name formed by rearranging letters of another.
// SAMPLE INPUT - anagram('anagram', 'nagaram') OUTPUT - true

function anagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}
	let frequencyStr1 = {};
	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		frequencyStr1[letter] ? (frequencyStr1[letter] += 1) : (frequencyStr1[letter] = 1);
	}

	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		if (!frequencyStr1[letter]) {
			return false;
		} else {
			frequencyStr1[letter] -= 1;
		}
	}
	return true;
}

const result = anagram("anagram", "nagaram");
console.log(result);
