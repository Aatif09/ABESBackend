import express from 'express';
const users = [{
  id: 1,
  name: 'Dev',
  email: 'dev@abes.ac.in'
}]
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/api", (req, res) => {
  res.send(users);
});
app.use(express.json()); // Built in Middleware
app.post("/api/users", (req, res) => {
  const bodydata = req.body;
  console.log(bodydata)
  res.send("Data received Successfully");
});
app.post("/api/createuser", (req, res) => {
  const { name, email } = req.body;
  const newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  users.push({ id: newid, name, email });
  res.status(201).send("User Created Successfully");
});
app.get("/getusers/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id == id);
  res.send(user);
});
app.patch("/api/updateUser/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const index = users.findIndex(user => user.id == id);
  users[index].name = name;
  res.send("User is updated successfully");
});
app.delete("/api/deleteUser/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(user => user.id == id);
  users.splice(index, 1);
  res.send("User is updated successfully");
});

app.get("/getusers", (req, res) => {
  res.send(users);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});