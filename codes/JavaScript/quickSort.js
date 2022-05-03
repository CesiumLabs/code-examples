function quickSort(array, ascending=true) {
	if (array.length < 2) return array;
	let sorted;
        if (ascending) {
                sorted = array.sort((a,b) => a - b);
        } else {
                sorted = array.sort((a,b) => b - a);
        }
        return sorted;
}
quickSort([2, 3, 1, 5, 6, 4, 8, 9, 7, 10]); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
quickSort([2, 3, 1, 5, 6, 4, 8, 9, 7, 10]); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
