const fs = require("fs");
const path = require("path");

class CRUD {
  constructor() {
    this.basedir = path.join(__dirname, "../db");
    this.board = `${this.basedir}/json/boards.json`;
    this.user = `${this.basedir}/json/users.json`;
    this.list = `${this.basedir}/json/lists.json`;
    this.task = `${this.basedir}/json/tasks.json`;
    this.token = `${this.basedir}/json/tokens.json`;
  }

  /*****************************
   * create object in any array
   * ***************************
   * @param {string} file
   * @param {object} data
   * @returns {object}object
   */
  create(file, data) {
    try {
      const readFileData = fs.readFileSync(this[file], {
        encoding: "utf8",
        flag: "r",
      });
      if (readFileData) {
        const datas = JSON.parse(readFileData);
        const addingData = JSON.stringify([...datas, data]);
        const writeData = fs.writeFileSync(this[file], addingData, {
          flag: "w+",
        });
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  /*****************************
   * read any array
   * ***************************
   * @param {string} file
   * @returns {Array}Array
   */
  read(file) {
    try {
      const readFileData = fs.readFileSync(this[file], {
        encoding: "utf8",
        flag: "r",
      });
      const data = JSON.parse(readFileData);
      if (data) {
        return data;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  /*****************************
   * update object in any array
   * **************************
   * @param {string} file
   * @param {number} id
   * @param {object} newData
   * @returns {object}object
   */
  update(file, id, newData) {
    try {
      const deleteData = this.delete(file, id);
      if (deleteData) {
        const updatedData = this.create(file, newData);
        return updatedData;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  /*****************************
   * delete object in any array
   * **************************
   * @param {string} file
   * @param {number} id
   * @returns {object}object
   */
  delete(file, id) {
    try {
      const readFileData = fs.readFileSync(this[file], {
        encoding: "utf8",
        flag: "r",
      });
      const data = JSON.parse(readFileData);
      if (data) {
        const idMatching = data.find((item) => item.id === id);
        const idNotMatching = data.filter((item) => item.id !== id);
        if (idNotMatching.length >= 0 && idMatching) {
          const writeingData = JSON.stringify(idNotMatching);
          const writeData = fs.writeFileSync(this[file], writeingData, {
            flag: "w",
          });
          return idMatching;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

module.exports = new CRUD();
