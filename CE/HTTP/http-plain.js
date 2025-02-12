const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async (req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<H1>Hello, worlddddddd!</H1>");
  const data = await fs.readFile("./home.html", 'utf8');
  res.end(data);
});
PORT = 3000;
server.listen(() => {
  const a = server.address();
  console.log(`Server is running on port ${a.port}`);
})