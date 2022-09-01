const express = require("express");
const cros = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
// const app = express();

const middleweares = [
   cros(),
   morgan("dev"),
   fileUpload(),
   express.json(),
   express.urlencoded({ extended: false }),
];

module.exports = middleweares;
