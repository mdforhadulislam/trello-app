const express = require("express");
const app = express();

const middlewares = require("./middlewares")
const routers=require("./router")

app.use(middlewares);
app.use(routers);

module.exports = app;
