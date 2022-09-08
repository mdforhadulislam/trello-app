const bcrypt = require("bcrypt");

const convartHash = (string) => {
  return bcrypt.hashSync(string, 2);
};

const compareHash = (string, hashString) => {
  return bcrypt.compareSync(string, hashString);
};

module.exports = {
  convartHash,
  compareHash,
};
