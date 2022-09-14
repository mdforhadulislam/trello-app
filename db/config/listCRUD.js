const crud = require("../../lib/crud");
const List = require("../../models/List");

class ListMethod {
  constructor() {}

  /**********************
   * created list
   *********************
   * @param {string} name
   * @param {string} color
   * @param {string} board_id
   * @returns {object} created list
   */
  listCreate(name, color, board_id) {
    const findBoard = crud.read("board").find((board) => board.id === board_id);
    if (findBoard) {
      const newList = new List(name, color, board_id);
      const createList = crud.create("list", newList);
      return createList;
    }
    return false;
  }

  /*****************************
   * board id to filtering list
   *****************************
   * @param {string} board_id
   * @returns {Array} list array
   */
  listFilterByBoardId(board_id) {
    const allList = crud.read("list");
    const filteringList = allList.filter((list) => list.board_id === board_id);
    return filteringList;
  }

  /*************************
   * deleted list
   *************************
   * @param {string} list_id
   * @returns {object} deleted list
   */
  listDeleteById(list_id) {
    const deleteList = crud.delete("list", list_id);
    return deleteList;
  }

  /***********************
   * updated list
   **********************
   * @param {string} id
   * @param {string} name
   * @param {string} color
   * @returns {object} updated list
   */
  listUpdateById(id, name, color) {
    const findList = crud.read("list").filter((list) => list.id === id);
    if (findList) {
      const newList = {
        ...findList,
        name: name,
        color: color,
        updateAt: new Date(),
      };
      const updateList = crud.update("list", id, newList);
      return updateList;
    }
    return false;
  }

  /**************************************
   * board delete then under list deleted
   **************************************
   * @param {string} board_id
   * @returns {Array} deleted list array
   */
  boardDeleteByListDelete(board_id) {
    const allList = crud.read("list");
    const findList = allList.filter((list) => list.board_id === board_id);
    let deleteList = new Array();
    findList.forEach((list) => {
      deleteList.push(crud.delete("list", list.id));
    });
    return deleteList;
  }

  /********************
   * find list
   ********************
   * @param {string} id
   * @returns {object} list
   */
  listFindById(id) {
    const allList = crud.read("list");
    const filteringList = allList.find((list) => list.id === id);
    return filteringList;
  }
}

module.exports = new ListMethod();
