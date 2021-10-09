const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Default: ${arr.join(", ")}`);

// shuffle
const shuffled = arr.sort(() => 0.5 - Math.random());
console.log(`Shuffled: ${shuffled.join(", ")}`);
