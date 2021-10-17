/**
 * Finds the median of an array of numbers.
 * @param {number[]} nums array of numbers
 * @returns {number}
 */
function findMedian(nums) {
	if (!nums.length) throw new Error("array is empty");
	nums.sort((a, b) => a - b); // sort in ascending order

	const mid = Math.floor(nums.length / 2);
	return nums.length % 2 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

console.log(findMedian([3, 5, 19, 12, 14])); // 12
console.log(findMedian([16, 2, 14, 7, 28, 51])); // 15
