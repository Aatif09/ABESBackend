// const express = require('express');
import express from 'express';
const app = express();

const port = 3000;
app.get('/', (req, res) => {
  res.send("Welcome to Express")
});
app.use(express.json());
app.post('/users', (req, res) => {
  const { name } = req.body;
  res.send(`My name is ${name}`)
});

//http://localhost:3000/api/aatif/232222
app.get('/api/:name/:rollno', (req, res) => {
  try {
    const { name, rollno } = req.params;
    res.send(`Welcome ${name} and Your roll no. is ${rollno}`);
  } catch (error) {
    console.log(`Error is : ${error.message}`)
  }
});

//http://localhost:3000/api?name=rajesh&rollno=5555
app.get('/api', (req, res) => {
  // const { name = "Guest", rollno = 100 } = req.query;
  try {
    const { name, rollno } = req.query;
    if (!name) {
      return res.status(400).send("Name is required");
    }
    else {
      res.send(`Wecome to ABES: ${name} and Roll no. id ${rollno}`)
    }
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});