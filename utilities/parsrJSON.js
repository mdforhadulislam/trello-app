/**
 *
 * @param {String} jsonString
 * @returns {any} Object || Array
 */
const parsrJSON = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return [];
  }
};

module.exports = parsrJSON;
