const fs = require('fs');
const read = () => {
  fs.readFile("./data.txt", "utf-8", (error, data) => {
    if (error) {
      console.error("Error reading file:", error);
    }
    else {
      console.log("File content:", data);
    }
  });
}
module.exports = read;