var http = require('http');

function doDoHttpServer(req, res) {
    if (req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('You requested /. Here is the default document content');
    } else if (req.url == "/test.htm") {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': 'null'});
        res.end(`{
            "me" : {
                "lastName":"Kim",
                        "firstName":"Grace"
            }
        }`
        );
    } else {
        res.writeHead(404, {'foo': 'bar'});
        res.end(`<html>
<body>
<h1>You requested ` +  req.url + `.</h1>
The URL is not found in this web server.
</body>
</html>`
        );
    }
}

var server = http.createServer(doDoHttpServer);
server.listen(8080);