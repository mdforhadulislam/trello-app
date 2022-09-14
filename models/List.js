const shortId = require("shortid");

class List {
  /***********************
   * list crateion models
   ***********************
   * @param {string} name
   * @param {string} color
   * @param {string} board_id
   */
  constructor(name, color, board_id) {
    this.id = shortId.generate();
    this.name = name;
    this.color = color ? color : "";
    this.board_id = board_id;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = List;
