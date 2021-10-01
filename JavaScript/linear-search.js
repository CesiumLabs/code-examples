const numbers = [15, 2, 1, 8, 10, 5, 20, 25];
const numberSought = 8;

const linearSearch = (numbers, wanted) => {
    let find = numbers.find(n => n === wanted);
    if(find) return true;

    return false;
}


linearSearch(numbers, numberSought);
