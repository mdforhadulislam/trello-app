const Board = require("../../models/Board");

const createBoardHendler = async (req, res) => {
  const { name, color } = req.body;
  try {
    if (name && color) {
      const board = new Board({
        name: name,
        color: color,
        user: req.session.user,
      });

      const newBoard = await board.save();

      res.status(200).json(newBoard);
    } else {
      res.status(404).json({ message: "There was a problem in your request" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem " });
  }
};

module.exports = createBoardHendler;
