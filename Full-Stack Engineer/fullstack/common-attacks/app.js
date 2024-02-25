const express = require("express");
const fs = require("fs");
const app = express(); 
const PORT = process.env.PORT || 4001; 

app.use(express.json());
   
//<!-- SEARCH -->
app.get("/search", (req, res) => {
  let result = fs.readFileSync(__dirname + "/index.html");

  const s = "Could not find product: " + req.query.q;
  result = result.toString().replace("<!-- SEARCH -->", s);
  res.send(result);
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port: ${PORT}`)
});