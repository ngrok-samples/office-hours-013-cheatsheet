const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Load Balanced');
}).listen(8081, () => console.log('Listening on http://localhost:8081'));
