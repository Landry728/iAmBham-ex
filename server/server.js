const express = require("express");
const path = require("path");

const app = express();
const port = "3000";

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.use(express.static(path.join(__dirname, "/views")));
app.listen(port, function() {
  console.log("Server listening on port " + port);
});