const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const getTaskHendler = (req, res) => {
   try {
      const { li } = req.query;

      curd.read("list", (err, listData) => {
         if (err) {
            const findList = utilites.find(listData, "id", li);
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
                                 curd.read("task", (err, taskData) => {
                                    if (err) {
                                       const filterTask = taskData.filter(
                                          (task) => task.list_id === li
                                       );
                                       if (filterTask) {
                                          res.status(200).json(filterTask);
                                       } else {
                                          res.status(404).json({ message: "task not found" });
                                       }
                                    } else {
                                       res.status(404).json({ message: "task not found" });
                                    }
                                 });
                              } else {
                                 res.status(406).json({ message: "you are not allow" });
                              }
                           } else {
                              res.status(406).json({ message: "you are not allow" });
                           }
                        });
                     } else {
                        res.status(404).json({ message: "Board not found" });
                     }
                  } else {
                     res.status(500).json({ message: "Internal Server Error" });
                  }
               });
            } else {
               res.status(404).json({ message: "List not found" });
            }
         } else {
            res.status(500).json({ message: "Internal Server Error" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};


module.exports = getTaskHendler;
