const { createServer } = require('node:http');
const url = require('node:url');  // Import the 'url' module to parse query parameters

const hostname = '0.0.0.0';
const port = 3000;

// Get the name from the environment variable, or default to 'World'
const nameFromEnv = process.env.NAME || 'World';

const server = createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;  // Parse the URL to get query parameters
  const name = queryObject.name || nameFromEnv;  // Use the name from the query or the environment variable

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${name}`);  // Respond with 'Hello' followed by the name
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
