let solveX = (equation) => {

    let splitEquation = equation.toString().split(' ');
    let filterEquation = [];
    for (let i = 0; i < splitEquation.length; i++) {
        if (!isNaN(parseInt(splitEquation[i]))) {
            filterEquation.push(splitEquation[i]);
        };
    };

    let filterX = filterEquation.filter((eq) => eq.split('').includes('x'))[0];
    let splitX = filterX.split('');
    splitX.pop();
    let getNumX = parseInt(splitX.join(''));

    let filterY = filterEquation.filter((eq) => eq.split('').includes('y'))[0];
    let splitY = filterY.split('');
    splitY.pop();
    let getNumY = parseInt(splitY.join(''));
    let divideY = getNumY / getNumX;

    let remainNumbers = [];
    for (let i = 0; i < filterEquation.length; i++) {
        let parsedNumber = parseInt(filterEquation[i]);
        if (parsedNumber.toString.length === filterEquation[i].length) {
            remainNumbers.push(parseInt(filterEquation[i]));
        };
    };

    let dividedNumbers = [];
    for (let i = 0; i < remainNumbers.length; i++) {
        dividedNumbers.push(remainNumbers[i] / getNumX);
    };

    return `x = ${divideY === 1 ? '' : divideY}y ${dividedNumbers.map((v) => {
        if (v < 0) {
            return `- ${v}`;
        } else {
            return `+ ${v}`;
        };
    }).join(' ')}`;

};

console.log(solveX('10y = 2x - 3 + 4'));
// -> x = 5y + 1.5 + 2