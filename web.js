#!/usr/bin/env node

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Bitstarter !!!\n');
}).listen(process.env.PORT || 8124);

