const handleRequest = (req, res) => {
  const {method, url} = req
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({"message" : "Hello"}));
  }

module.exports = handleRequest;