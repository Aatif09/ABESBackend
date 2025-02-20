import express from 'express';
const port = 3000;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  const { name = 'Guest', pagenumber = 1 } = req.query;
  res.send(`Hello ${name}! You're on page number ${pagenumber}.`);
});

app.get('/api/:name', (req, res) => {
  const pname = req.params.name;
  res.send(`Hello ${pname}`);
});
app.get('/api/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send(`Hello ${name}, you are ${age} years old!`);
});

app.get('/get', (req, res) => {
  const { name, pagenumber } = req.query;
  if (!name) {
    // res.send({ status: 404, message: 'Name is required' })
    res.status(404).send("NAme dedo bhaiay..");
  }
  else {
    res.send(`Hello ${name}! You're on page number ${pagenumber}.`);
  }
});

app.post('/post', (req, res) => {
  // const { name = 'Guest', pagenumber = 1 } = req.query;
  const { name, rollno } = req.body;
  
  res.send(`Hello ${name}! You're on page number ${rollno}.`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});