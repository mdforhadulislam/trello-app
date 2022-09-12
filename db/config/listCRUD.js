const crud = require("../../lib/crud");
const List = require("../../models/List");
const { boardFindById, updateBoard, findAllBoard } = require("./boardCRUD");

class ListMethod {
  constructor() {}
  listCreate(name, color, board_id) {
    const findBoard = crud.read("board").find((board) => board.id === board_id);
    if (findBoard) {
      const newList = new List(name, color, board_id);
      const createList = crud.create("list", newList);
      return createList;
    }
    return false;
  }
  listFilterByBoardId(board_id) {
    const allList = crud.read("list");
    const filteringList = allList.filter((list) => list.board_id === board_id);
    return filteringList;
  }
  listDeleteById(list_id) {
    const deleteList = crud.delete("list", list_id);
    return deleteList;
  }
  listUpdateById(id, data) {
    const updateList = crud.update("list", id, data);
    return updateList;
  }

  boardDeleteByListDelete(board_id) {
    const allList = crud.read("list");
    const findList = allList.filter((list) => list.board_id === board_id);
    let deleteList = new Array();
    findList.forEach((list) => {
      deleteList.push(crud.delete("list", list.id));
    });
    return deleteList;
  }

  listFindById(id) {
    const allList = crud.read("list");
    const filteringList = allList.find((list) => list.id === id);
    return filteringList;
  }
}

module.exports = new ListMethod();
