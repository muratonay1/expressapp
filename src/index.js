const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("murat nodejs docker denem");
});
app.listen(3000);
