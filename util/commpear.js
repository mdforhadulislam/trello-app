const bcrypt = require("bcrypt");

/**
 * @param {String} string
 * @param {String} hashString
 * @returns {String} String
 */
const commpear = (string, hashString) => {
  const value = bcrypt.compareSync(string, hashString);
  return value;
};

module.exports = commpear;
