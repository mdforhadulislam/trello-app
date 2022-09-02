const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const putListHendler = (req, res) => {
   try {
      const { id } = req.params;
      let { name, color } = req.body;

      name = name.length > 0 ? name : false;
      if (name) {
         curd.read("list", (err, datas) => {
            if (err) {
               const findList = utilites.find(datas, "id", id);
               if (findList) {
                  curd.read("board", (err, datas) => {
                     if (err) {
                        const findBoard = datas.find(
                           (board) => board.id === findList.board_id
                        );
                        if (findBoard) {
                           tokenToGetUser(req, (err, user) => {
                              if (err) {
                                 if (user.id === findBoard.user.id) {
                                    const newList = {
                                       ...findList,
                                       name: name ?? findList.name,
                                       color: color ?? findList.color,
                                       updateAt: new Date(),
                                    };
                                    curd.update(
                                       "list",
                                       findList.id,
                                       newList,
                                       (err, data) => {
                                          if (err) {
                                             res.status(500).json(newList);
                                          } else {
                                             res
                                                .status(500)
                                                .json({ message: "Internal Server Error" });
                                          }
                                       }
                                    );
                                 } else {
                                    res.status(500).json({ message: "you are not allow" });
                                 }
                              } else {
                                 res
                                    .status(500)
                                    .json({ message: "Internal Server Error" });
                              }
                           });
                        } else {
                           res.status(500).json({ message: "Internal Server Error" });
                        }
                     } else {
                        res.status(500).json({ message: "Internal Server Error" });
                     }
                  });
               } else {
                  res.status(500).json({ message: "Internal Server Error" });
               }
            } else {
               res.status(500).json({ message: "Internal Server Error" });
            }
         });
      } else {
         res.status(500).json({ message: "send valid data" });
      }
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

module.exports = putListHendler;
