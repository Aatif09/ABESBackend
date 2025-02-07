const fs = require('fs').promises;
const write = async () => {
  const newData = "This is new data being written!";
  await fs.writeFile("./data.txt", newData, { encoding: "utf8" });
  console.log("Data written successfully!");
};
const read = async () => {
  const data = await fs.readFile("./data.txt", { encoding: "utf8" });
  console.log(data);
};
const main = async () => {
  await write(); // Write to the file first
  await read();  // Read from the file after writing
};

main();
console.log("Code Ended");
