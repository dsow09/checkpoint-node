let http = require('http');
let fs = require('fs');
let port = Number(process.argv[2]);

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(port);
console.log(`Le serveur écoute sur le port ${port}`)