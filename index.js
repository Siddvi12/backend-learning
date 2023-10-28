require('dotenv').config()

console.log("chai and code");
//express is all about request and response
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("https://twitter.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>please hire me</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
