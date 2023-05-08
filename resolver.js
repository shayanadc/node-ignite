const routes = require('./routes.js')

const handleRequest = (req, res) => {
  const {method, url} = req
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(routes.find(method.toLowerCase(), url)));
  }

module.exports = handleRequest;