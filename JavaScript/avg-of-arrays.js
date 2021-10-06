// JS: find the average of all integers in an array

const intArr = [1,2,3,4,5];
const average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average(intArr));
// expected output 3