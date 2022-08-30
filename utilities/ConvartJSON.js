/**
 * @param {any} data
 * @returns {String} String
 */

const convartJSON = (data) => {
  try {
    return JSON.stringify(data);
  } catch {
    return "";
  }
};

module.exports = convartJSON;
