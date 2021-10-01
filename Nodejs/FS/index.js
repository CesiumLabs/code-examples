const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/text.txt`).toString();
console.log(data);
