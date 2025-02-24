// const express=require('express');
import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send("Welcome CS-C students");
});
//http://localhost:3000/api?name=Rahul&rollno=2323
//http://localhost:3000/api   (default values)
app.get('/api', (req, res) => {
  try {
    // const { name = "Guest", rollno = 100 } = req.query;
    const { name, rollno } = req.query;
    if (!name) {
      // res.send({ status: 404, message: "Name dena hai" });
      res.status(404).send("Name dena hai");
    }
    else {
      res.send(`My name is ${name} and Rollno. is ${rollno}`);
    }

  } catch (error) {
    console.log("Error is:" + error.message);
  }
});

//http://localhost:3000/api/aatif
//http://localhost:3000/api/aatif/99999
app.get('/api/:name/:rollno', (req, res) => {
  const { name, rollno } = req.params;
  res.send(`My name is ${name} and my roll no. is ${rollno}`);
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
