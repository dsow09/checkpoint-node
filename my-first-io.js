const fs = require('fs');

let contents = fs.readFileSync(process.argv[2]);
let nbrLines = (contents.toString().split('\n').length - 1);

console.log(nbrLines);