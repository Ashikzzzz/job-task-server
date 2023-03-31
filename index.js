const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Job Task is running");
  });
  
  app.get("*", (req, res) => {
    res.send("No route found");
  });
  
  app.listen(port, () => {
    console.log(`Server running ${port}`);
  });