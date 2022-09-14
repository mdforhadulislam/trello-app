const crud = require("../../lib/crud");
const User = require("../../models/User");

class UserMethod {
  constructor() {}

  /********************
   * created User
   ********************
   * @param {string} name
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @returns {object} created user
   */
  userCreate(name, username, email, password) {
    const newUser = new User(name, username, email, password);
    const user = crud.create("user", newUser);
    return user;
  }

  /********************
   * finding user (id)
   *******************
   * @param {number} id
   * @returns {object}single User
   */
  findById(id) {
    const user = crud.read("user");
    const findUser = user.find((sUser) => sUser.id === id);
    return findUser;
  }

  /***********************
   * finding user (email)
   **********************
   * @param {string} email
   * @returns {object}single User
   */
  findByEmail(email) {
    const user = crud.read("user");
    const findUser = user.find((sUser) => sUser.email === email);
    return findUser;
  }

  /*************************
   * finding user (username)
   *************************
   * @param {string} username
   * @returns {object}single User
   */
  findByUsername(username) {
    const user = crud.read("user");
    const findUser = user.find((sUser) => sUser.username === username);
    return findUser;
  }

  /***********************************
   * filtering matching user username
   ***********************************
   * @param {string} username
   * @returns  {Array} find user Array
   */
  filterByUsername(username) {
    const user = crud.read("user");
    const findUser = user.filter((sUser) => sUser.username === username);
    return findUser;
  }

  /********************************
   * filtering matching user email
   ********************************
   * @param {string} username
   * @returns  {Array} find user Array
   */
  filterByEmail(email) {
    const user = crud.read("user");
    const findUser = user.filter((sUser) => sUser.email === email);
    return findUser;
  }

  /**************************
   * delete user data
   **************************
   * @param {number} id
   * @returns {object} user object
   */
  deleteById(id) {
    const user = crud.delete("user", id);
    return user;
  }

  /**************************
   * update user data
   **************************
   * @param {number} id
   * @param {object} data
   * @returns {object} Delete User Object
   */
  updateById(id, data) {
    const updatedUser = crud.update("user", id, data);
    return updatedUser;
  }
}

module.exports = new UserMethod();
