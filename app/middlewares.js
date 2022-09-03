const express = require("express");
const cros = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

const middleweares = [
  cros(),
  morgan("dev"),
  fileUpload(),
  express.json({ limit: "50mb" }),
  express.urlencoded({ limit: "250mb", extended: false }),
];

module.exports = middleweares;
