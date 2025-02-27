import express from 'express';
const app = express()
const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to CSE-C students");
});
app.get("/about", (req, res) => {
  res.send("Welcome to About page");
});

http://127.0.0.1:3000/api/Abhishek/9999
app.get("/api/:name/:rollno", (req, res) => {
  try {
    const data = req.params;
    res.send(`Welcome ${data.name} and your roll.no. is ${data.rollno}`);

  } catch (error) {
    console.log("Error: ", error.message);
  }
});
//http://localhost:3000/api?name=Rahul&rollno=2010202
app.get("/api", (req, res) => {
  try {
    const { name, rollno } = req.query;
    if (!name) {
      // res.send({ status: 404, message: "Please enter a name" });
      res.status(404).send("Please enter a name");
    }
    else {
      res.send(`Welcome ${name} and your roll.no. is ${rollno}`);
    }
  } catch (error) {
    console.log(error.message)
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});