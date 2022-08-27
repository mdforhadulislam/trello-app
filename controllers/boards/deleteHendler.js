const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");

const deleteBoardHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const board = await Board.findById(_id);

    if (board.user.email === req.session.user.email) {
      if (board.list.length > 0) {
        board.list.filter((item) => {
          List.findByIdAndDelete(item).then((res1) => {
            if (res1) {
              if (res1.todos.length > 0) {
                res1.todos.filter((todo) => {
                  Todo.findByIdAndDelete(todo._id).then((res2) => {
                    if (res2) {
                      Board.findByIdAndDelete(_id).then((res3) => {
                        return res.status(200).json({
                          message:
                            "board Deleted and under all list and all listed todos",
                          board: res3,
                        });
                      });
                      return res
                        .status(404)
                        .json({ message: "No board found" });
                    }
                  });
                });
              } else {
                Board.findByIdAndDelete(_id).then((res1) => {
                  return res.status(200).json({
                    message:
                      "board Deleted and under all list and all listed todos deleted",
                    board: res1,
                  });
                });
              }
            }
          });
        });
      } else {
        Board.findByIdAndDelete(_id).then((res1) => {
          return res.status(200).json({
            message: "board Deleted and under all list and all listed todos",
            board: res1,
          });
        });
      }
    } else {
      res
        .status(404)
        .json({ message: "you are not allow to delete this board" });
    }
  } catch {
    res.status(404).json({ message: "There was a server side problem" });
  }
};

module.exports = deleteBoardHendler;
