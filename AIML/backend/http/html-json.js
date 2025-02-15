const http = require('http');
const fs = require('fs/promises');
// const users = [{
//   id: 1, name: 'Ayush', email: 'ayush@example.com',
// }, {
//   id: 2, name: 'Suresh', email: 'suresh@example.com',
// }, {
//   id: 3, name: 'Rahul', email: 'rahul@example.com',
// }]
const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const jdata = await fs.readFile("./aa.json", "utf8");
  // const users = JSON.parse(jdata);
  // const data = users.map((user) => {
  //   return user.name;
  // });
  // let data = ""
  // users.forEach((user) => {
  //   data += user.name;
  // });
  // res.end(JSON.stringify(users));
  res.end(jdata)
});
port = 3000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});