const { boardFindById, updateBoard } = require("../../db/config/boardCRUD");

const updateBoardHendler = (req, res) => {
  try {
    const { id } = req.params;

    const findBoard = boardFindById(id);

    if (findBoard) {
      let { name, color } = req.body;
      name = name.length > 0 ? name : false;
      color = color.length > 0 ? color : false;

      if (name || color) {
        const newBoard = {
          ...findBoard,
          name: name,
          color: color,
          updateAt: new Date(),
        };
        const updatedBoard = updateBoard(id, newBoard);

        res.status(200).json(updatedBoard);
      } else {
        res.status(400).json({ message: "send valid value" });
      }
    } else {
      res.status(404).json({ message: "board not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = updateBoardHendler;
