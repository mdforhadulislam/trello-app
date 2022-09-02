const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const deleteListHenlder = (req, res) => {
   try {
      const { id } = req.params;

      curd.read("list", (err, datas) => {
         if (err) {
            const findList = utilites.find(datas, "id", id);
            if (findList) {
               curd.read("board", (err, datas) => {
                  if (err) {
                     const findBoard = utilites.find(datas, "id", findList.board_id);
                     if (findBoard) {
                        tokenToGetUser(req, (err, user) => {
                           if (err) {
                              if (user.id === findBoard.user.id) {
                                 curd.delete("list", findList.id, (err, data) => {
                                    if (err) {
                                       res.status(200).json(findList);
                                    } else {
                                       res
                                          .status(404)
                                          .json({ message: "list is not delete" });
                                    }
                                 });
                              } else {
                                 res.status(400).json({ message: "you are not allow" });
                              }
                           } else {
                              res.status(500).json({ message: "Internal Server Error" });
                           }
                        });
                     } else {
                        res.status(404).json({ message: "board not found" });
                     }
                  } else {
                     res.status(500).json({ message: "Internal Server Error" });
                  }
               });
            } else {
               res.status(404).json({ message: "list not found" });
            }
         } else {
            res.status(500).json({ message: "Internal Server Error" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

module.exports = deleteListHenlder;
