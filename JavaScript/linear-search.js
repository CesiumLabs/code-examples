const numbers = [15, 2, 1, 8, 10, 5, 20, 25];
const numberToFind = 15;

const linearSearch = numbers => numbers.some((element) => element === numberSought);
linearSearch(numbers, numberToFind);
