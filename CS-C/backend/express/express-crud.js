import express from 'express';
const users = [{
  id: 1,
  name: 'Abhishek',
  age: 30
}];
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send("Hello CS-C");
});
app.get('/users', (req, res) => {
  fileread
  res.send(users);
});
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id == id);
  res.send(user);
});
app.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const index = users.findIndex(user => user.id == id);
  users[index].name = name;
  res.send(users);
});
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id == id);
  users.splice(index, 1);
  res.send("User is deleted Successfully");
});
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const newID = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push({ id: newID, name, age });
  res.send("New User is created successfully");
});

app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Data added successfully");
});
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});