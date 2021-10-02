let binarySearch = function (arr, x, start, end) {
	if (start > end) return false;
	let mid = Math.floor((start + end) / 2);
	if (arr[mid] === x) return true;
	if (arr[mid] > x) return binarySearch(arr, x, start, mid - 1);
	else return binarySearch(arr, x, mid + 1, end);
};

let arr = [1, 4, 5, 2, 3];
let num = 1;

binarySearch(arr, num, 0, arr.length - 1); //returns true.
