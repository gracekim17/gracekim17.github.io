var http = require('http');

var data = {
    "foo":"bar",
    "foo2":"bar2"
}

function doDoHttpServer(req, res) {
    if (req.url == "/") {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': 'null'});
        res.end('You requested /. Here is the default document content');
    } else if (req.url == "/game/read") {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': 'null'});
        res.end(JSON.stringify(data));
    } else if (req.url == "/game/write") {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': 'null'});
        data[req.headers.myname] = req.headers.myvalue;
        res.end("write was successful!!!");
    } else if (req.url.startsWith("/game/translate?")) {
        res.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin': 'null'});
        var queryString = req.url.replace("/game/translate?", "");
        queryString = queryString.replace("%20", " ");
        if (queryString == "Grace Kim") {
            res.end('<html><head><meta charset="utf-8"></head><body>김예지</body></html>');
        }
        if (queryString == "JeongHwan Kim") {
            res.end('<html><head><meta charset="utf-8"></head><body>김정환</body></html>');
        }
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