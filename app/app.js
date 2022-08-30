require("dotenv").config("../.env");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

app.use("/api/v1", require("./routes"));

module.exports = app;
