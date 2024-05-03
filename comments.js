// Create web server
// Create a route to handle requests

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = require('./comments');
var root = path.dirname(require.main.filename);

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  var ext = path.extname(pathname);
  var file = root + pathname;
  if (ext === '.js') {
    fs.readFile(file, function (err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Not Found');
      } else {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.end(data);
      }
    });
  } else if (ext === '.css') {
    fs.readFile(file, function (err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Not Found');
      } else {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.end(data);
      }
    });
  } else if (ext === '.html') {
    fs.readFile(file, function (err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Not Found');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
      }
    });
  } else if (ext === '.json') {
    fs.readFile(file, function (err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Not Found');
      } else {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(data);
      }
    });
  } else if (ext === '.ico') {
    fs.readFile(file, function (err, data) {
      if (err) {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 Not Found');
      } else {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});