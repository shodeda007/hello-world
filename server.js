const { createServer } = require('node:http');
const url = require('node:url');

const hostname = '0.0.0.0';
const port = 3000;

const server = createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name || process.env.NAME || 'World';
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${name}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
