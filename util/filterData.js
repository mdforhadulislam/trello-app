/**
 *
 * @param {Array} array
 * @param {string} filterProperties
 * @param {string} filteringData
 * @returns {Array} Array
 */
function filterData(array, filterProperties, filteringData) {
  return array.filter((data) => data[filterProperties] === filteringData);
}

module.exports = filterData;
