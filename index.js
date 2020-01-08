const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
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
