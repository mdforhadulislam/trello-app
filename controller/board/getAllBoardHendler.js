const { findAllBoard } = require("../../db/config/boardCRUD");
const { findByTokenToGetId } = require("../../db/config/tokenCRUD");
const { findById } = require("../../db/config/userCRUD");

const getAllBoardHendler = (req, res) => {
  try {
    const { headers } = req;
    const token = headers.authorization;
    const tokenToGetUser = findByTokenToGetId(token);
    if (tokenToGetUser) {
      const user = findById(tokenToGetUser.id);
      if (user) {
        const allUserBoards = findAllBoard(user.username);

        res.status(200).json(allUserBoards);
      } else {
        res.status(401).json({ message: "you are not allow" });
      }
    } else {
      res.status(401).json({ message: "you are not allow" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = getAllBoardHendler;
