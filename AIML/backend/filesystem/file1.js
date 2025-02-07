


// const fs = require('fs');
// fs.writeFileSync("./data3.txt", "Hello This is my new work", "utf-8");
// fs.appendFileSync("./data1.txt", "Work from another file", "utf-8");
// fs.renameSync("./data3.txt", "./data5.txt");
// fs.unlinkSync("./data5.txt");


const fs = require('fs');
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
if (data.match("H")) {
  console.log("H is found");
  const newdata = data.replace("H", "ABES");
  fs.writeFileSync("./data.txt", newdata, "utf-8");
}   
