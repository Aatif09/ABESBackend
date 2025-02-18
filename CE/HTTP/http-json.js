const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' });
  const filedata = await fs.readFile("./aa.json", 'utf8');
  console.log(filedata)
  const parsedata = JSON.parse(filedata);
  console.log(parsedata);
  res.end(JSON.stringify(parsedata));
  // const newdata = users.map((user) => {
  //   return user.name
  // });
  // let newdata = "";
  // users.forEach((user) => {
  //   newdata += `${user.name}`;
  // });


});

PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});