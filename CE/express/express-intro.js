import express from 'express';

const app = express();
app.get('/', (request, response) => {
  response.send("Hello CE Stduents");
});
//http://localhost:3000/api/Raj/21
app.get('/api/:name/:age', (req, res) => {
  try {
    const data = req.params;
    res.send(`Hello dear CE Stduent ${data.name} and your age is ${data.age}`);
  } catch (error) {
    console.log(error.message);
  }
});
//http://localhost:3000/api?name=Rahul&rollno=789
app.get('/api', (request, response) => {
  try {
    const { name, rollno } = request.query;
    if (!name) {
      response.send({
        status: 404, message: "Name is required"
      });
      response.status(404).send("Name to dena hi hogas")
    }
    else {
      response.send(`Hello Dear ${name} and my roll no. is ${rollno}`);
    }
  } catch (error) {
    console.log(error.message)
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
