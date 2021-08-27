const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("murat nodejs docker deneme ottoman msü");
});
app.listen(3000);
