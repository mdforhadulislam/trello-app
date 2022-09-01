const cros = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload")


const middleweares = [cros(), morgan("dev"), fileUpload()];

module.exports = middleweares;
