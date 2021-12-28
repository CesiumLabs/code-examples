let array1 = ["apple", "pear", "orange", "peach"];
let array2 = ["pineapple", "watermelon", "grapefruit"];
let array3 = ["strawberry", "banana", "lemon"];

let joined1 = array1.concat(array2);
let joined2 = array1.concat(array2, array3);

console.log(joined1); //["apple", "pear", "orange", "peach", "pineapple", "watermelon", "grapefruit"]
console.log(joined2); //["apple", "pear", "orange", "peach", "pineapple", "watermelon", "grapefruit", "strawberry", "banana", "lemon"]
