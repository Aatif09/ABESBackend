const fspromise = require('fs/promises');
const read = async () => {
  try {
    const data = await fspromise.readFile("./data.txt", "utf-8");
    console.log(data)
  } catch (error) {
    console.log(error.msg)
  }
}
const write = async () => {
  await fspromise.writeFile("./data2.txt", "My name is AJ", "utf-8");
}
// read();
// write();
module.exports = read;

