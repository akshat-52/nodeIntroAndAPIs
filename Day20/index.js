var http = require('http');

http.createServer(function (req, res){

    console.log(req);
    //res.write(req);
    res.write("Hello World");
    res.end();
}).listen('8080');