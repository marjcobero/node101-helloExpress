// write your code here
const http = require('http');
const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer(function (req, res) {
// log a msg when request is received
    console.log('Received ' + req.method + 'request for: ' + req.url);

    // send headers
    res.writeHead(200, {'Content-type': 'text/plain'});

    // send body response
    res.end("Hello World\n");
});

// listen for incoming connection
server.listen(port, hostname, function() {
// log a msg that the server is listening and port
console.log('Server is listening on http://${hostname}:${port}/')
})