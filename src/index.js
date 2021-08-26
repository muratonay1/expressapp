const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DOCKER DENEME");
});
app.listen(3000);
