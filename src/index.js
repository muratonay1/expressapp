const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("İsmet Murat Onay");
});

app.listen(3000);
