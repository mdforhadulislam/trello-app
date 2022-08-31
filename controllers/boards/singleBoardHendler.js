const curd = require("../../lib/curdOparations");
const parsrJSON = require("../../util/parsrJSON");

const singleBoardHendler = (req, res) => {
  try {
    const { id } = req.params;

    curd.read("boards", (err, data) => {
      if (err) {
        const datas = parsrJSON(data);
        const singleBoard = datas.find((board) => board.id === id);
        if (singleBoard) {
          res.status(200).json(singleBoard);
        } else {
          res.status(500).json({ message: "board not found" });
        }
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = singleBoardHendler;
