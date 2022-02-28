const fs = require('fs');
const path = require('path');
const extension = '.' + process.argv[3];


fs.readdir(process.argv[2], function(err, list) {
    if (err) return console.error(err);
    list.forEach(function(file) {
        if(path.extname(file) === extension) console.log(file)
    })
})   
