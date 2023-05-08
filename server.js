const http = require('http');
const handleRequest = require('./resolver')

const server = http.createServer(handleRequest);


module.exports = server