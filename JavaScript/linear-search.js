const numbers = [15, 2, 1, 8, 10, 5, 20, 25];
const numberSought = 8;

const linearSearch = (numbers, wanted) => {
    for (const number of numbers) 
        if (number === wanted) return true;

    return false;
}


linearSearch(numbers, numberSought); 