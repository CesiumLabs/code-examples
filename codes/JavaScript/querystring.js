/**
 * Parses a query string in to a key value object.
 * @param {string} str Query string to parse.
 * @returns {object}
 */
const parseQueryString = (str) => {
  const qs = new URLSearchParams(str);
  return Object.fromEntries(qs.entries());
}

console.log(parseQueryString('?a=1&b=2')); // { a: '1', b: '2' }