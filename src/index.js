const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("murat nodejs docker deneme");
});
app.listen(3000);
