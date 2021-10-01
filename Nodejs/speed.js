function speed(max) {
	let sum = 0
	for (const n = max; n > 0; n--) {
		foo = n / 17;
		sum = sum + n;
	}
	
	return sum;
}

const start = new Date().getTime();
speed(100000000);
const end = new Date().getTime();
const time = end - start;

console.log(`JavaScript: ${time} ms`);
