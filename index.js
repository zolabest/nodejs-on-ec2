const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'A Monk in Cloud!\n'
  res.end(msg);
}).listen(80);
