const strings = [`Hello world`, `I'm cool`, `You are so handsome`, `Moyai`, `Mice love cheese`];

const sorted = strings.sort((a, b) => {
	return a > b ? 1 : b > a ? -1 : 0;
});

console.log(sorted);
// [
//   'Hello world',
//   "I'm cool",
//   'Mice love cheese',
//   'Moyai',
//   'You are so handsome'
// ]
