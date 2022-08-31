const shortID = require("shortid");

class List {
  /**
   *
   * @param {string} boardID
   * @param {string} name
   * @param {Array<string>} todo
   */
  constructor(boardID, name, todo) {
    this.id = shortID.generate();
    this.name = name;
    this.todo = todo;
    this.board_id = boardID;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = List;
