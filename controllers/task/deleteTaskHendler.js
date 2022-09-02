const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const deleteTaskHendler = (req, res) => {
   try {
      const { id } = req.params;

      curd.read("task", (err, tasks) => {
         if (err) {
            const findTask = utilites.find(tasks, "id", id);
            if (findTask) {
               curd.read("list", (err, lists) => {
                  if (err) {
                     const findList = utilites.find(lists, "id", findTask.list_id);
                     if (findList) {
                        curd.read("board", (err, boards) => {
                           if (err) {
                              const findBoard = utilites.find(
                                 boards,
                                 "id",
                                 findList.board_id
                              );
                              if (findBoard) {
                                 tokenToGetUser(req, (err, user) => {
                                    if (err) {
                                       if (user.id === findBoard.user.id) {
                                          curd.delete("task", findTask.id, (err, data) => {
                                             if (err) {
                                                res.status(200).json(data);
                                             } else {
                                                res
                                                   .status(500)
                                                   .json({ message: "Internal Server Error" });
                                             }
                                          });
                                       } else {
                                          res
                                             .status(406)
                                             .json({ message: "you are not allow" });
                                       }
                                    } else {
                                       res
                                          .status(406)
                                          .json({ message: "you are not allow" });
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
            } else {
               res.status(404).json({ message: "task not found" });
            }
         } else {
            res.status(500).json({ message: "Internal Server Error" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

// get id to task
// task to get list
// list to get board
// board to compear user
// delete task

module.exports = deleteTaskHendler;
