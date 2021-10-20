let input = 55

let decimalToBinary = (decimal) => {
    let binary = 0;
    let rem;
    let i = 1;
    while (decimal != 0) {
        rem = decimal % 2;
        decimal = parseInt(decimal / 2);
        binary = binary + rem * i;
        i = i * 10;
    };
    return binary;
};

console.log(decimalToBinary(input));
// -> 110111