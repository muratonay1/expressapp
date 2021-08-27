const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("murat nodejs docker deneme ottoman");
});
app.listen(3000);
