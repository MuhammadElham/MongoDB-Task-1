// Requiring Express
const express = require("express");
const app = express();

// Task: 1 Return data through JSON
// Getting form API
// app.get("/api/data", (req, res) => {
//   res.send({
//     name: "Elham",
//     age: 19,
//     married: false,
//   });
// });

// Task:2 Retun through URL
app.get("/api/data", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send("Hello " + name + " and your age = " + age);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is Running Successfully");
});
//Express me bar bar server chalana parhta hein
