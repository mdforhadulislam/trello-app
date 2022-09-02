const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const deleteBoardHendler = (req, res) => {
   try {
      const { id } = req.params;
      tokenToGetUser(req, (err, user) => {
         if (err) {
            curd.read("board", (err, data) => {
               if (err) {
                  const findAllBoard = data.filter(
                     (board) => board.user.id === user.id
                  );
                  const findBoard = utilites.find(findAllBoard, "id", id);
                  if (findBoard) {
                     curd.delete("board", findBoard.id, (err, data) => {
                        if (err) {
                           res
                              .status(200)
                              .json({ message: "board deleted", board: data });
                        } else {
                           res.status(500).json({ message: "Internal Server Error" });
                        }
                     });
                  } else {
                     res.status(404).json({ message: "not found" });
                  }
               } else {
                  res.status(500).json({ message: "Internal Server Error" });
               }
            });
         } else {
            res.status(400).json({ message: "you are not allow" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

module.exports = deleteBoardHendler;
