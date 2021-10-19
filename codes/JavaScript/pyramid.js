const pyramid = (rows, char = '*') => {
  if (char.length !== 1)
    throw new Error('`char` must be one character.');

  let res = [];
  for (let i = 0; i < rows; i++) {
    let space = ' '.repeat(rows - i - 1);
    let row = Array(i + 1).fill(char).join(' ');
    res.push(`${space}${row}${space}`);
  }
  return res.join('\n');
}

console.log(pyramid(5));
console.log(pyramid(7, '#'));