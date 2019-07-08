var http = require('http');

function doDoHttpServer(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.writeHead(200, {'foo': 'bar'});
    res.end('Hello. My name is Grace Kim.');
}

var server = http.createServer(doDoHttpServer);
server.listen(8080);