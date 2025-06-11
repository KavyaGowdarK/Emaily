const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send({ hi: "there" });
  console.log("test commit");
  
});
app.listen(5001);
