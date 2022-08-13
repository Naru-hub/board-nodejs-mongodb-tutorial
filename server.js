const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
require("dotenv").config();

app.use(express.static("public"));

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.listen(PORT, console.log("server running"));
