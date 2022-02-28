const fs = require('fs');

fs.readFile(process.argv[2], function(err, content) {
    let nbrLines = (content.toString().split('\n').length - 1);

    console.log(nbrLines);
})