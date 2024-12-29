const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  } else {
    console.log('Server listening on port 8080');
  }
});