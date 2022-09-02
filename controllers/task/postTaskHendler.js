const curd = require("../../lib/curdOparations");
const Task = require("../../models/Task");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const postTaskHendler = (req, res) => {
   try {
      let { task, done, list_id } = req.body;

      task = task.length > 0 ? task : false;
      done = typeof done === "boolean" ? done : false;

      if (task || done) {
         curd.read("list", (err, datas) => {
            if (err) {
               const findList = utilites.find(datas, "id", list_id);
               if (findList) {
                  curd.read("board", (err, data) => {
                     if (err) {
                        const findBoard = utilites.find(data, "id", findList.board_id);
                        if (findBoard) {
                           tokenToGetUser(req, (err, user) => {
                              if (err) {
                                 if (user.id == findBoard.user.id) {
                                    const newTask = new Task(task, done, list_id);

                                    curd.create("task", newTask, (err, data) => {
                                       if (err) {
                                          const updatedList = {
                                             ...findList,
                                             todos: [...findList.todos, newTask.id],
                                          };
                                          curd.update(
                                             "list",
                                             findList.id,
                                             updatedList,
                                             (err, data) => {
                                                if (err) {
                                                   res.status(200).json(newTask);
                                                } else {
                                                   res
                                                      .status(500)
                                                      .json({ message: "Internal Server Error" });
                                                }
                                             }
                                          );
                                       } else {
                                          res
                                             .status(500)
                                             .json({ message: "Internal Server Error" });
                                       }
                                    });
                                 }
                              } else {
                                 res.status(406).json({ message: "you are not allow" });
                              }
                           });
                        } else {
                           res.status(404).json({ message: "board not found" });
                        }
                     } else {
                        res.status(404).json({ message: "board not found" });
                     }
                  });
               } else {
                  res.status(404).json({ message: "list not found" });
               }
            } else {
               res.status(404).json({ message: "list not found" });
            }
         });
      } else {
         res.status(400).json({ message: "send valid data" });
      }
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};


module.exports = postTaskHendler;
