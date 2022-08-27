const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");

const deleteBoardHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const board = await Board.findById(_id);

    if (board.user.email === req.session.user.email) {
      board.list.filter((item) => {
        List.findByIdAndDelete(item).then((res) => {
          if (res) {
            res.todos.filter((todo) => {
              Todo.findByIdAndDelete(todo._id).then((res) => {
                if (res) {
                  Board.findByIdAndDelete(_id).then((res) => {
                    return res.status(200).json({
                      message:
                        "board Deleted and under all list and all listed todos",
                      board: deletedBoard,
                    });
                  });
                  return res.status(404).json({ message: "No board found" });
                }
              });
            });
          }
        });
      });
    } else {
      res
        .status(404)
        .json({ message: "you are not allow to delete this board" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem" });
  }
};

module.exports = deleteBoardHendler;
