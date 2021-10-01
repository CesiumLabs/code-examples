// JS: find the average of all integers in an array

const average = (array) => array.reduce((a, b) => a + b) / array.length;

console.log(average([1,2,3,4,5]));
// expected output 3