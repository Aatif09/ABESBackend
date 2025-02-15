const fspromises = require("fs/promises");

const read = async () => {
  try {
    const data = await fspromises.readFile("./data.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}
const write = async () => {
  try {
    const newdata = "This is my new work"
    await fspromises.writeFile("./data2.txt", newdata, "utf8");
  } catch (error) {
    console.log(error.message);
  }
}
read();
write();
console.log("first")