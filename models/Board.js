const shortId = require("shortid");

class Board {
  /***************************
   * board createion model
   *****************************
   * @param {string} name
   * @param {string} color
   * @param {string} user
   */
  constructor(name, color, user) {
    this.id = shortId.generate();
    this.name = name;
    this.color = color ? color : "";
    this.user = [user];
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = Board;
