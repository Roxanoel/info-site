const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  // Home page
  if(req.url === '/') {
    fs.readFile('index.html', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end;
    });
  }
  // About page
  else if (req.url === '/about') {
    fs.readFile('about.html', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end;
    });
  }
  // Contact page
  else if (req.url === '/contact-me') {
    fs.readFile('contact.html', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end;
    });
  } 
  // 404
  else {
    fs.readFile('404.html', function(err, data){
      if (err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end;
    });
  }

}).listen(8080);