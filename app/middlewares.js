const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: false }),
]);


module.exports = app;
