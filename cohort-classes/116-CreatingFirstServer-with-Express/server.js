// const express = require("express");

// const app = express();

// app.get("/home", (req, res) => {
//   res.send("Welcome to home page");
// });

// app.get("/about", (req, res) => {
//   res.send("Welcome to about page");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });



// practice



const express = require("express");
const app = express();

//  A simple GET route - basic request and response
app.get("/", (req, res) => {
  res.send("Welcome to My Tiny API!");
});

//  A route with QUERY PARAMS
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest"; 
  res.send(`Hello, ${name}!`);
});

//  A route with URL PARAMS
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId; // 
  res.send(`You asked for user with ID: ${userId}`);
});

//  A route that responds with JSON
app.get("/api/data", (req, res) => {
  const data = {
    success: true,
    name: "Myra",
    skills: ["HTML", "CSS", "JavaScript", "Node.js"],
  };
  res.json(data); 
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
