/*
One liner implementation of reversing a number.
The Math.sign() function returns either a positive or negative +/- 1, 
indicating the sign of a number passed into the argument. 
*/

let x = 4321;
console.log(parseInt(x.toString().split("").reverse().join("")) * Math.sign(x));
