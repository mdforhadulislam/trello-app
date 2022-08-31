const bcrypt = require("bcrypt");

/**
 * @param {String} string
 * @returns {String} String
 */
const convartHash = (string) => {
  const hashString = bcrypt.hashSync(string, 3);
  return hashString;
};

module.exports = convartHash;