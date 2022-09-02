const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const putBoardHendler = (req, res) => {
   try {
      const { name, color } = req.body;
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
                     if (name || color) {
                        const newBoard = {
                           ...findBoard,
                           name: name ? name : findBoard.name,
                           color: color ? color : findBoard.color,
                           createAt: new Date(),
                        };

                        curd.update("board", findBoard.id, newBoard, (err, data) => {
                           if (err) {
                              res.status(500).json(data);
                           } else {
                              res.status(500).json({ message: "Internal Server Error" });
                           }
                        });
                     } else {
                        res.status(400).json({ message: "send valid data" });
                     }
                  } else {
                     res.status(404).json({ message: "not found" });
                  }
               } else {
                  res.status(500).json({ message: "Internal Server Error" });
               }
            });
         } else {
            res.status(406).json({ message: "you are not allow" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

module.exports = putBoardHendler;
