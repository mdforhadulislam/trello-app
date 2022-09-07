const express = require("express");
const app = express();
const cros = require("cors");
const expressFileUploader = require("express-fileupload");

const middlewares = [
  cros(),
  express.json(),
  express.urlencoded({ extended: false }),
  expressFileUploader(),
];

module.exports = middlewares;
