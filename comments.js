// Create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a web server
http.createServer(function (req, res) {
  // Parse the request containing file name
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(filename);
  // Check if file exists
  fs.exists(filename, function (exists) {
    if (exists) {
      // If file exists read it and return it
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      // If file does not exist return 404
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write("404 Not Found");
      return res.end();
    }
  });
}).listen(8080);
// Console will print the message
console.log('Server running at http://  localhost:8080/');