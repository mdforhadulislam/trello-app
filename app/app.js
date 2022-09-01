const express = require("express");
const app = express();
const routers = require("./router");
const middlewares = require("./middlewares");

app.use(middlewares);

app.use("/", routers);

module.exports = app;
