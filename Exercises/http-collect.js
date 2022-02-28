let http = require('http');
let bl = require('bl');
const url = process.argv[2];

http.get(url, (res) => {
    res.pipe(bl((err, data) => {    
        let blx = new bl()
        blx.append(data)
        console.log(blx.length);
        console.log(data.toString()) 

    }))

})