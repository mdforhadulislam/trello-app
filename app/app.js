require("dotenv").config("../.env");
const express = require("express");
const app = express();

require("./middlewares");
app.use("/", require("./routes"));

module.exports = app;
