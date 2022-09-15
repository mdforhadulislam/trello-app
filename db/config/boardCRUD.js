const crud = require("../../lib/crud");
const Board = require("../../models/Board");
const { findByUsername, updateById } = require("./userCRUD");

class BoardMethod {
  /****************************
   * user board createion
   ****************************
   * @param {string} name
   * @param {string} color
   * @param {string} user
   * @returns {object} object
   */
  createBoard(name, color, user) {
    const checkUser = findByUsername(user.username);
    if (checkUser) {
      const newBoard = new Board(name, color, user.username);

      const createBoard = crud.create("board", newBoard);

      updateById(checkUser.id, {
        ...checkUser,
        boards: [...checkUser.boards, newBoard.id],
      });
      return createBoard;
    } else {
      return false;
    }
  }

  /***************************
   * user update board
   ***************************
   * @param {string} id
   * @param {object} data
   * @returns {object}object
   */
  updateBoard(id, data) {
    const allboard = crud.read("board");
    const findBoard = allboard.find((board) => board.id === id);
    const updateBoard = crud.update("board", id, { ...findBoard, ...data });
    return updateBoard;
  }

  /**************************
   * user deleted board
   **************************
   * @param {string} id
   * @returns {object} object
   */
  deleteBoard(id) {
    const findBoard = crud.delete("board", id);
    if (findBoard) {
      findBoard.user.map((username) => {
        const findUser = findByUsername(username);
        updateById(findUser.id, {
          ...findUser,
          boards: [
            ...findUser.boards.filter((boardId) => boardId !== findBoard.id),
          ],
        });
      });
      return findBoard;
    } else {
      return false;
    }
  }

  /**************************
   * find user all board
   **************************
   * @param {string} username
   * @returns {object} object
   */
  findAllBoard(username) {
    const user = findByUsername(username);
    const userAllBoards = new Array();

    user.boards.forEach((boardId) => {
      const boards = crud.read("board");
      const findBoard = boards.find((board) => board.id === boardId);
      if (findBoard === undefined) {
      } else {
        userAllBoards.push(findBoard);
      }
    });
    return userAllBoards;
  }

  /**************************
   * board filter by id
   **************************
   * @param {string} id
   * @returns {object}object
   */
  boardFilterById(id) {
    const allBoard = crud.read("board");
    const findBoard = allBoard.find((board) => board.id === id);
    return findBoard;
  }

  /**************************
   * board filter by username
   **************************
   * @param {string} username
   * @returns {object}object
   */
  boardFilterByUser(username) {
    const allBoard = crud.read("board");
    const filterBoard = allBoard.filter(
      (board) => board.user.find((user) => user === username) === username
    );
    return filterBoard;
  }

  /********************
   * boards find by id
   ********************
   * @param {string} id
   * @returns {object} single board
   */
  boardFindById(id) {
    const allBoards = crud.read("board");
    const findBoard = allBoards.find((board) => board.id === id);
    return findBoard;
  }

  /**********************************************
   * when user get board then checking user board
   **********************************************
   * @param {string} username
   * @param {string} board_id
   * @returns {boolean} true or false
   */
  boardListCheckingUser(username, board_id) {
    const findUser = findByUsername(username);
    const matchingUser = findUser.boards.find(
      (boardId) => boardId === board_id
    );
    if (matchingUser !== undefined) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new BoardMethod();
