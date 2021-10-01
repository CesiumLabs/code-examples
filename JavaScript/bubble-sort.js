function bubbleSort(array) {
    array = array.slice();

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {

            if(array[j] > array[j + 1]) {
                const swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}

const array = [54,21,4,75,364,1,904,68];
const sortedArray = bubbleSort(array); 
console.log(sortedArray);