const http = require('http');
const fs = require('fs/promises');
// const users =
//   [{
//     id: 1, name: 'Rahul', email: 'rahul@example.com'
//   }, { id: 2, name: 'Raj', email: 'raj@example.com' },
//   { id: 3, name: 'Mahesh', email: 'mahesh@example.com' }];

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = await fs.readFile("./aa.json", 'utf8');
  const jsdata = JSON.parse(data);
  // const usersdata = users.map((user) => {
  //   return user.name
  // })
  // let usersdata = ""
  // users.forEach((user) => {
  //   usersdata += user.name
  // })
  res.end(JSON.stringify(jsdata));
});
PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});