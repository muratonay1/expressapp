const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("İsmet Murat Onay 2021");
});

app.listen(3000);
