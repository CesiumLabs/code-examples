const continent = ['asia', 'europe', 'america', 'europe']

const getUniqueItemsInArray = (arr) => [...new Set(continent)]

const uniqueContinent = getUniqueItemsInArray(continent)
console.log(uniqueContinent);
// Output [ 'asia', 'europe', 'america' ]