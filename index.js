const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Server hosting");
});

app.get("/ashok", (req, res) => {
  res.send("Server running at PORT 3000");
});
