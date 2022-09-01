const fs = require("fs");
const path = require("path");
const utilites = require("../utils/utilites");

class CURDOPARATIONS {
  constructor() {
    this.basedir = path.join(__dirname, "../db");
    this.board = `${this.basedir}/boards.json`;
    this.user = `${this.basedir}/users.json`;
    this.list = `${this.basedir}/list.json`;
    this.task = `${this.basedir}/task.json`;
    this.token = `${this.basedir}/tokens.json`;
  }


  /**
   * @param {string} file
   * @param {object} data
   * @param {Function} callback
   * @returns {Boolean} Boolean
   */
  // this methoad wroking create an object to database
  create(file, data, callback) {
    fs.readFile(
      this[file],
      "utf8",
      /**
       *
       * @param {boolean} err
       * @param {Array} fileData
       */
      (err, fileData) => {
        if (!err) {
          // convart json string to js object
          const fileDataConvart = JSON.parse(fileData);
          fs.open(this[file], "r+", (err1, fileDescriptor) => {
            if (!err1 && fileDescriptor) {
              // convart data to string
              const stringData = JSON.stringify([...fileDataConvart, data]);
              // write data to file
              fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                  fs.close(fileDescriptor, (err3) => {
                    if (!err3) {
                      callback(true, data);
                    } else {
                      callback(false, null);
                    }
                  });
                } else {
                  callback(false, null);
                }
              });
            } else {
              callback(false, null);
            }
          });
        } else {
          callback(false, null);
        }
      }
    );
  }


  /**
   *
   * @param {String} file
   * @param {Function} callback
   * @returns {Array} Array
   */
  // this method working database to read data
  read(file, callback) {
    fs.readFile(this[file], "utf8", (err, fileData) => {
      if (!err) {
        return callback(true, utilites.jsonParse(fileData));
      } else {
        callback(false, null);
      }
    });
  }


  /**
   * @param {String} file
   * @param {String} id
   * @param {Object} data
   * @param {Function} callback
   * @returns {Boolean} Boolean
   */
  // this method working update to any object in database
  update(file, id, newdata, callback) {
    this.delete(file, id, (err, data) => {
      // when err reaturn true then create a data
      if (err && Boolean) {
        this.create(file, newdata, (err1, data) => {
          if (err1 && data) {
            callback(true, data);
          } else {
            callback(false);
          }
        });
      } else {
        callback(false);
      }
    });
  }


  /**
   *
   * @param {String} file
   * @param {String} id
   * @param {Function} callback
   * @returns {Boolean} Boolean
   */
  // this is working delete item in database
  delete(file, id, callback) {
    fs.readFile(this[file], "utf8", (err, fileData) => {
      if (!err) {
        // convart json string to js object
        const fileDataConvart = JSON.parse(fileData);
        const deletedData = fileDataConvart.filter((item) => item.id !== id);
        const mainData = fileDataConvart.filter((item) => item.id === id);
        fs.open(this[file], "r+", (err, fileDescriptor) => {
          if (!err) {
            fs.ftruncate(fileDescriptor, (err) => {
              if (!err) {
                const stringData = JSON.stringify(deletedData);
                fs.writeFile(this[file], stringData, (err) => {
                  if (!err) {
                    fs.close(fileDescriptor, (err4) => {
                      if (!err4) {
                        callback(true, mainData);
                      } else {
                        callback(false, null);
                      }
                    });
                  } else {
                    callback(false, null);
                  }
                });
              } else {
                callback(false, null);
              }
            });
          } else {
            callback(false, null);
          }
        });
      } else {
        callback(false, null);
      }
    });
  }


}

const curd = new CURDOPARATIONS();

module.exports = curd
