const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const putTaskHendler = (req, res) => {
   try {
      const { id } = req.params;
      const { task, done } = req.body;

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
                                          const updateTask = {
                                             ...findTask,
                                             task: task.length > 0 ? task : findTask.task,
                                             done:
                                                typeof done == "boolean" ? done : findTask.done,
                                             updateAt: new Date(),
                                          };
                                          curd.update(
                                             "task",
                                             findTask.id,
                                             updateTask,
                                             (err, data) => {
                                                if (err) {
                                                   res.status(200).json(data);
                                                } else {
                                                   res
                                                      .status(500)
                                                      .json({ message: "Internal Server Error" });
                                                }
                                             }
                                          );
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


module.exports = putTaskHendler;
