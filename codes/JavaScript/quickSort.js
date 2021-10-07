function quickSort(array) {
	if (array.length < 2) return array;
	let [head, ...tails] = array,
		left = [],
		equal = [],
		right = [];
	for (let element of tails) {
		(element < head ? left : element > head ? right : equal).push(element);
	}
	return [...quickSort(left), head, ...equal, ...quickSort(right)];
}
quickSort([2, 3, 1, 5, 6, 4, 8, 9, 7, 10]);
