const pyramid = (length, char = '*') => {
  if (char.length !== 1)
    throw new Error('`char` must be one character.');

  return Array.from({ length }, (_, i) => {
      const space = " ".repeat(length - i - 1);
      return space + Array.from({ length: i + 1 }, () => char).join(" ") + space;
  }).join("\n");
}

console.log(pyramid(5));
console.log(pyramid(7, '#'));
