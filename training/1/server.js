var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
            console.log('new requist');
            res.writeHead(200, {'content-Type': 'text/plain' });
            res.end('hello world from node server.js');
                        
            }).listen(3000);

