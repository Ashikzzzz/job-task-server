const express = require("express");
const cors = require("cors");
const dbConnect = require("./utils/dbconnect");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



dbConnect()

// console.log(uri)





app.get("/", (req, res) => {
    res.send("Job Task is running");
  });
  
  app.get("*", (req, res) => {
    res.send("No route found");
  });
  
  app.listen(port, () => {
    console.log(`Server running ${port}`);
  });