const express = require("express");
const cros = require("cors");
const morgan = require("morgan");
const expressFileUploader = require("express-fileupload");

const middlewares = [
  cros(),
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
  expressFileUploader(),
];

module.exports = middlewares;
