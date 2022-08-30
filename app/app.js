require("dotenv").config("../.env");
const express = require("express");
const app = express();

require("./middlewares");

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

app.use("/api/v1", require("./routes"));

module.exports = app;
