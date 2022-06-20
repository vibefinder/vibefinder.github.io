const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3000

const server = http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(error,data){
        if (error) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end("Error: File not found");
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
        }
        res.end()
    })
})

    server.listen(port, function(error){
    if (error) {
        console.log('Smth went wrong', error)
    } else {
        console.log('Server is listenning on port' + port)
    }
})