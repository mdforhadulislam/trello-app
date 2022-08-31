const curd = require("../../lib/curdOparations");
const parsrJSON = require("../../util/parsrJSON");

const getBoardHendler = (req, res) => {
  try {
    const user = req.session.user;
    curd.read("boards", (err, data) => {
      if (err) {
        const datas = parsrJSON(data);
        const finduserBoards = datas.filter((board) => board.user === user);
        if (finduserBoards) {
          res.status(200).json(finduserBoards);
        } else {
          res.status(500).json({ message: "you have no boards" });
        }
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getBoardHendler;
