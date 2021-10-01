/**
 * Arithemic Operators
 */
process.stdout.write('\033c');
console.log('Arithemic Operators\n');

let a = 90;
let b = 30;

// Addition
console.log(a + b);
// -> 120

// Subtraction
console.log(a - b);
// -> 60

// Multiplication
console.log(a * b);
// -> 2700

// Exponentiation (ES20216)
console.log(a ** b);
// -> 4.2391158275216203e+58

// Division
console.log(a / b);
// -> 3

// Modulus (Division Remainder)
console.log(a % b);
// -> 0

// Increment
a++;
console.log(a);
// -> 91

// Decrement
b--;
console.log(b);
// -> 29

console.log('\nAssignment Operators\n');

/**
 * Assignment Operators
 */
a = 90;
b = 30;

console.log(a = b);
// -> 30

console.log(a += b);
// -> 60

console.log(a -= b);
// -> 30

console.log(a *= b);
// -> 900

console.log(a /= b);
// -> 30

console.log(a %= b);
// -> 0

console.log(a **= b);
// -> 0

console.log('\nString Operators\n');

/**
 * String Operators
 */
a = "Hello, ";
b = "World!";

console.log(a + b);
// -> Hello, World!
// or
console.log(`${a}${b}`);

a += b;
console.log(a);
// -> Hello, World

console.log(a + 5);
// -> Hello, 5

console.log('\nComparison Operators\n');

/**
 * Comparison Operators
 */
a = 5;
b = "5";

// Equal to
console.log(a == b);
// -> true

// Equal value & type
console.log(a === b);
// -> false

// Not equal
console.log(a != b)
// -> false

// Not equal & type
console.log(a !== b)
// -> true

a = 3;
b = 5;

// Greater than
console.log(a > b)
// -> false

// Less than
console.log(a < b)
// -> true

// Greater than or equal to
console.log(a >= b)
// -> false

// Less than or equal to
console.log(a <= b)
// -> false

// Temary operator
console.log(a === b ? true : false)
// -> false

console.log('\nLogical Operators\n');

/**
 * Logical Operators
 */
a = "ye";
b = null;

console.log(a && b ? true : false)
// -> false

console.log(a || b ? true : false)
// -> true

console.log(a ?? b ? true : false)
// -> true

console.log('\nType Operators\n');

/**
 * Type Operators
 */
a = "y";
b = { "he": "lo" };

console.log(typeof a);
// -> string

console.log('\nBitwise Operators\n');

/**
 * Bitwise Operators
 */
a = 6;
b = 3;

console.log(a & b);
// -> 2

console.log(a | b);
// -> 7

console.log(~ a);
// -> -1

console.log(a ^ b);
// -> 5

console.log(a << b);
// -> 48

console.log(a >> b);
// -> 0

console.log(a >>> b);
// -> 0
