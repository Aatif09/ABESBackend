const http = require('http');
const fs = require('fs/promises');
const port = 3000;
const server = http.createServer(async (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write("Hello CSE-C students")
  const readdata = await fs.readFile("./home.html", 'utf8');
  res.end(readdata);
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});