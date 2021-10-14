/**
 * Counts number of appearances of an item in an array.
 *
 * We could use {@link Array.prototype.filter} and get the length,
 * but this solution is faster.
 *
 * @param {any[]} array
 * @param {any} item The item to count.
 * @returns {number} Number of ``item`` in ``array``.
 */
const count = (array, item) => {
	let i = 0;
	for (const index of array) {
		if (index === item) i++;
	}
	return i;
};

console.log(count([1, 4, 3, 6, 2, 2, 4, 15, 8, 9], 2)); // 2
console.log(count(["foo", "bar", "foo", "foo", "bar", "foo", "bar", "bar", "bar", "foo"], "foo")); // 5
