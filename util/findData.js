/**
 *
 * @param {Array} array
 * @param {string} findProperties
 * @param {string} findingData
 * @returns {object} object
 */
function findData(array, findProperties, findingData) {
  return array.find((data) => data[findProperties] === findingData);
}

module.exports = findData;
