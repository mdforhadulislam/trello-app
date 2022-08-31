const curd = require("../../lib/curdOparations");
const Board = require("../../models/Board");

const postBoardHendler = (req, res) => {
  try {
    let { name, color } = req.body;

    name = name.length > 0 ? name : false;
    color = color.length > 0 ? color : false;

    if (name && color) {
      const newBoard = new Board(req.session.user, name, color, []);

      curd.create("boards", newBoard, (err, data) => {
        if (err) {
          res.status(200).json(data);
        } else {
          res.status(500).json({ message: "Internal Server Error" });
        }
      });
    } else {
      res.status(400).json({ message: "send valid data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = postBoardHendler;
