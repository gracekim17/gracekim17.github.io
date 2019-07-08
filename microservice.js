var http = require('http');

function serviceRequest(req, res) {
    if (req.url.startsWith('/pic')){
        res.writeHead(200, {'Content-Type':'text/html'});

        var searchQuery = req.url.replace("/pic?", "");
        if (searchQuery == 'dog'){
            res.end("Here is a picture of: a dog");
        } else {
            res.end("Here is a picture: ");
        }
    } else {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end("failed.");
    }
}

var server = http.createServer(serviceRequest);
server.listen(8080);