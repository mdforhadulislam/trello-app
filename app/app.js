require("dotenv").config("../.env");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");

const secret = process.env.SECRET;

// middlewares conections
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    name: "trellor-api",
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);

// single routes
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

app.get("/", (_req, res) => {
  res.status(200).send("at first login");
});

// version 1 api url
app.use("/api/v1", require("./routes"));

module.exports = app;
