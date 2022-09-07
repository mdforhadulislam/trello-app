const express = require("express");
const app = express();

app.use(require("./middlewares"));
app.use("/", require("./router"));

module.exports = app;
