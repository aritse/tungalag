const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to My Page");
});

app.get("/family", (req, res) => {
  res.json({
    parents: ["Ari", "Tungalag"],
    kids: ["Amina", "Misheel"]
  });
});

app.listen(3000, function() {
  console.log("listening on port", PORT);
});
