const shortId = require("shortid");
const bcrypt = require("bcrypt");
const path = require("path");
const curd = require("../lib/curdOparations");

class Utilites {
  constructor() {
    this.uploadedPath = `${__dirname}/../media/`;
  }

  /**
   * @param {Array<object>} array
   * @param {String} filterPropartis
   * @param {String} filterData
   * @returns {Array<object>}Array
   */
  filter(array, filterPropartis, filterData) {
    const filteringData = array.filter(
      (data) => data[filterPropartis] === filterData
    );
    return filteringData;
  }

  /**
   * @param {Array<object>} array
   * @param {String} filterPropartis
   * @param {String} filterData
   * @returns {Array<object>}Array
   */
  deleteFiltering(array, filterPropartis, filterData) {
    const filteringData = array.filter(
      (data) => data[filterPropartis] !== filterData
    );
    return filteringData;
  }

  /**
   *
   * @param {Array<string>} array
   * @param {string} filterData
   * @returns {Array<string>}Array
   */
  singlePropartisFiltering(array, filterData) {
    const filteringData = array.filter((data) => data === filterData);
    return filteringData;
  }

  /**
   *
   * @param {Array<string>} array
   * @param {string} filterData
   * @returns {Array<string>}Array
   */
  deleteSinglePropartisFiltering(array, filterData) {
    const filteringData = array.filter((data) => data !== filterData);
    return filteringData;
  }

  /**
   *
   * @param {Array<object>} array
   * @param {string} filterPropartis
   * @param {string} filterData
   * @returns {object}object
   */
  find(array, findPropartis, filterData) {
    const findingData = array.find(
      (data) => data[findPropartis] === filterData
    );
    return findingData;
  }

  /**
   *
   * @param {string} string
   * @returns {string}string
   */
  convartHash(string) {
    const hashData = bcrypt.hashSync(string, 5);
    return hashData;
  }

  /**
   *
   * @param {string} string
   * @param {string} hashString
   * @returns {string} string
   */
  compeaData(string, hashString) {
    const value = bcrypt.compareSync(string, hashString);
    return value;
  }

  /**
   *
   * @param {any} data
   * @returns {string}string
   */
  jsonStringify(data) {
    return JSON.stringify(data);
  }

  /**
   *
   * @param {string} data
   * @returns {any}any
   */
  jsonParse(data) {
    return JSON.parse(data);
  }

  /**
   *
   * @param {string} username
   * @param {object} file
   * @param {Function} callback
   */
  fileUploader(username, file, callback) {
    if (file) {
      const fileExt = path.extname(file.name);
      if (fileExt === ".jpg" || fileExt === ".png" || fileExt === ".gift") {
        const fileName = `${username}-${shortId.generate()}${fileExt}`;
        const filePath = `${this.uploadedPath}${fileName}`;
        const profileApiPath = `/api/v1/media/${fileName}`;
        file.mv(filePath, (err) => {
          if (!err) {
            callback(true, profileApiPath, "success");
          } else {
            callback(false, null, "Internal Server Error");
          }
        });
      } else {
        callback(false, null, "any one uploaded type .jpg, .png and .gift");
      }
    } else {
      callback(false, null);
    }
  }
}

const utilites = new Utilites();

module.exports = utilites;
