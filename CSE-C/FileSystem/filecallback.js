const fscallback = require('fs');
const read = () => {
  fscallback.readFile("./data.txt", "utf-8", (error, data) => {
    if (error) {
      console.error(error.message);
    }else { console.log(data); }});
}
read();
console.log("1st");
console.log("2nd");
console.log("3rd");
console.log("4th");

