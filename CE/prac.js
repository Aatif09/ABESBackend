const fspromise = require("fs/promises");

const read = async () => {
  try {
    const data = await fspromise.readFile("./daata.txt", "utf-8");
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

const write = async () => {
  try {
    await fspromise.writeFile("./daata.txt", "utf-8");
  } catch (error) {
    console.log(error.message)
  }
}


read();
write();