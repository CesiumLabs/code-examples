/**
 * Calculates the greatest common divisor of 2 numbers using the Euclid's algorithm
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} the greatest common divisor
 */
 function euclid(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	if (a < b) {
		let holder = a;
		a = b;
		b = holder;
	}
	let r = 0;
	while (b > 0) {
		r = a % b;
		a = b;
		b = r;
	}
	return a;
}

console.log(euclid(15, 20)); //5
console.log(euclid(999, 837)); //27
console.log(euclid(610, 987)); //1
console.log(euclid(-999, -837)); //27

/**
 * Calculates the greatest common divisor of 2 numbers using the Euclid's algorithm
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} the greatest common divisor
 */
 function euclidRecursive(a, b) {
	a = Math.abs(a);
	b = Math.abs(b);
	if (a < b) {
		let holder = a;
		a = b;
		b = holder;
	}

	if(a === 0) return b;
    if(b === 0) return a;
    return euclidRecursive(b, a % b);
}

console.log(euclidRecursive(15, 20)); //5
console.log(euclidRecursive(999, 837)); //27
console.log(euclidRecursive(610, 987)); //1
console.log(euclidRecursive(-999, -837)); //27