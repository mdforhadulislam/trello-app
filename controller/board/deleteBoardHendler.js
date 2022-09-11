const { deleteBoard } = require("../../db/config/boardCRUD");

const deleteBoardHendler = (req, res) => {
  try {
    const { id } = req.params;

    const boardDelete = deleteBoard(id);

    if (boardDelete) {
      res.status(500).json({ message: "board deleted", board: boardDelete });
    } else {
      res.status(500).json({ message: "board not found" });
    }
  } catch (error) {
    console.table(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = deleteBoardHendler;
