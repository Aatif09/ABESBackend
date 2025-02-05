const fs = require('fs');
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
if (data.match("H")) {
  console.log("H is present");
  const changedata = data.replace("H", "ABES");
  fs.writeFileSync("./data.txt", changedata);
}

// fs.unlinkSync("./data2.txt");

// fs.writeFileSync("./data1.txt", "ABSE promise");
// fs.appendFileSync("./data1.txt", "AKTU");
// fs.renameSync("./data1.txt", "./data2.txt")