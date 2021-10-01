const numbers = [15, 2, 1, 8, 10, 5, 20, 25];
const numberSought = 15;

const linearSearch = (numbers, wanted) => numbers.some(e => e == numberSought)
linearSearch(numbers, numberSought)
