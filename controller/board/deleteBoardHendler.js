const { deleteBoard } = require("../../db/config/boardCRUD");
const { boardDeleteByListDelete } = require("../../db/config/listCRUD");

const deleteBoardHendler = (req, res) => {
  try {
    const { id } = req.params;

    const boardDelete = deleteBoard(id);
    const deletedList = boardDeleteByListDelete(id);

    if (boardDelete && deletedList) {
      res.status(500).json({ message: "board deleted", board: boardDelete });
    } else {
      res.status(500).json({ message: "board not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = deleteBoardHendler;
