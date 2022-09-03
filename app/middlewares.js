const express = require("express");
const cros = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const middleweares = [
  cros(),
  morgan("dev"),
  fileUpload(),
  express.json({ limit: "200mb" }),
  express.urlencoded({ limit: "200mb", extended: true }),
];

module.exports = middleweares;
