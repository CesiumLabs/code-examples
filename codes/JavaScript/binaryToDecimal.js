let input = '110111'

let binaryToDecimal = (binary) => {
    let splitBinary = binary.split('').reverse();
    let checkBinary = true;
    let decimal = 0;
    let multiply = 1;

    for (let i = 0; i < splitBinary.length; i++) {
        if (parseInt(splitBinary[i]) > 1 || parseInt(splitBinary[i]) < 0) {
            checkBinary = false;
        } else {
            decimal += (parseInt(splitBinary[i]) * multiply);
            multiply *= 2;
        };
    };

    if (checkBinary) {
        return decimal;
    }  else {
        return 'Not a valid binary format';
    };
};

console.log(binaryToDecimal(input));
// -> 55