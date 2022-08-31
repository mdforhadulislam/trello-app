const shortID = require("shortid");

class User {
  /**
   *
   * @param {string} name
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  constructor(name, username, email, password) {
    this.id = shortID.generate();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.createAt = new Date();
    this.updateAt = new Date();
  }
}

module.exports = User;
