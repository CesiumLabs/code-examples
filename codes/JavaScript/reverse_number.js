let number = 2358;
let reversed = 0;

while(number != 0) {
    digit = number % 10;
    reversed = reversed*10+digit;
    number -= digit;
    number /= 10;
}

console.log(`Reversed number = ${reversed}`)