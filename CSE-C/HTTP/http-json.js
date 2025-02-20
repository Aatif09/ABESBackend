const http = require('http');
const users = [{
  id: 1, name: 'Rahul', email: 'rahul@example.com'
},
{ id: 2, name: 'Raj', email: 'raj@example.com' },
{ id: 3, name: 'Ramesh', email: 'ramesh@example.com' }]
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  const namedata = users.map((user) => {
    return user.name
  });
  res.end(JSON.stringify(namedata));
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});