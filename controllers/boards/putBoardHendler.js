const curd = require("../../lib/curdOparations");

const putBoardHendler = (req, res) => {
  try {
    const { id } = req.params;
    curd.read("boards", (err, data) => {
      if (err) {
        const datas = JSON.parse(data);
        const findBoard = datas.find((board) => board.id === id);
        if (findBoard) {
        } else {
        }
        res.status(404).json({ message: "board not found" });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = putBoardHendler;
