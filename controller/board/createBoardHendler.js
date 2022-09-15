const { createBoard } = require("../../db/config/boardCRUD");
const { findByTokenToGetId } = require("../../db/config/tokenCRUD");
const { findById } = require("../../db/config/userCRUD");

const createBoardHendler = (req, res) => {
  try {
    let { name, color } = req.body;
    name = name.length > 0 ? name : false;

    if (name) {
      const { headers } = req;
      const token = headers.authorization;

      const tokenToGetUser = findByTokenToGetId(token);
      if (tokenToGetUser) {
        const user = findById(tokenToGetUser.id);

        if (user) {
          const newBoard = createBoard(name, color, user);

          res.status(200).json(newBoard);
        } else {
          res.status(401).json({ message: "you are not allow" });
        }
      } else {
        res.status(401).json({ message: "you are not allow" });
      }
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createBoardHendler;
