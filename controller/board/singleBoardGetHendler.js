const {
  boardFindById,
  boardListCheckingUser,
} = require("../../db/config/boardCRUD");
const { findByTokenToGetId } = require("../../db/config/tokenCRUD");
const { findById } = require("../../db/config/userCRUD");

const singleBoardGetHendler = (req, res) => {
  try {
    const { id } = req.params;

    const findBoard = boardFindById(id);
    if (findBoard) {
      const { headers } = req;
      const token = headers.authorization;
      const checkTokenToUser = findByTokenToGetId(token);
      if (checkTokenToUser) {
        const findUser = findById(checkTokenToUser.id);
        const userAndBoardRelationCheck = boardListCheckingUser(
          findUser.username,
          id
        );
        if (userAndBoardRelationCheck) {
          res.status(200).json(findBoard);
        } else {
          res.status(500).json({ message: "You are not allow" });
        }
      } else {
        res.status(500).json({ message: "You are not allow" });
      }
    } else {
      res.status(500).json({ message: "board not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = singleBoardGetHendler;
