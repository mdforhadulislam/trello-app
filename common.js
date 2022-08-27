const bcrypt = require("bcrypt");
const path = require("path");
const fs = require("fs");

const convartHash = (string) => {
  const hashString = bcrypt.hashSync(string, 3);
  return hashString;
};

const compare = (string, hashString) => {
  const value = bcrypt.compareSync(string, hashString);
  return value;
};

const fileRead = (file, callback) => {
  fs.readFile(`${path.join(__dirname, "/")}/${file}`, "utf8", (err, data) => {
    callback(err, data);
  });
};

module.exports = {
  convartHash,
  compare,
  fileRead,
};
