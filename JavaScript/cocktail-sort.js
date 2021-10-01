function cocktailSort(array) {
	array = array.slice();

	let start = 0, 
		end = array.length, 
		swapped = true;

	while (swapped) {
		swapped = false;

		//Bubble sort, moving the largest to the back.
		for (let i = start; i < end - 1; i++)
		{
			if (array[i] > array[i+1]) {
				const swap = array[i];
				array[i] = array[i+1];
				array[i+1] = swap;
				swapped = true;
			}
		}

		end--;

		if (!swapped)
		{
			break;
		}

		swapped = false;

		//Reverse Bubble sort, moving the smallest to the front.
		for (let i = end - 1; i > start; i--)
		{
			if (array[i - 1] > array[i])
			{
				const swap = array[i];
				array[i] = array[i - 1];
				array[i - 1] = swap;
				swapped = true;
			}
		}

		start++;
	}

	return array;
}

const array = [54,21,4,75,364,1,904,68];
const sortedArray = cocktailSort(array); 
console.log(sortedArray);