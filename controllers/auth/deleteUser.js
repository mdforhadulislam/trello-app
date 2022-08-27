const Board = require("../../models/Board");
const List = require("../../models/List");
const Todo = require("../../models/Todo");
const User = require("../../models/User");

const deleteUserHendler = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);

    if (user) {
      const boards = await Board.find({
        username: user.usename,
        email: user.email,
      });
      if (boards.length > 0) {
        await boards.filter(async (board) => {
          if (board.list.length > 0) {
            await board.list.filter(async (list) => {
              await List.findById(list).then(async (respons) => {
                if (respons) {
                  if (respons.todos.length > 0) {
                    await respons.todos.filter(async (todo) => {
                      await Todo.findById(todo).then(async (respons1) => {
                        if (respons1) {
                          await Todo.findByIdAndDelete(todo);
                          res
                            .status(404)
                            .json({ message: "Account was deleted" });
                        }
                      });
                    });
                    await List.findByIdAndDelete(list);
                    res.status(404).json({ message: "Account was deleted" });
                  } else {
                    await List.findByIdAndDelete(list);
                    res.status(404).json({ message: "Account was deleted" });
                  }
                }
              });
            });
            Board.findByIdAndDelete(board._id);
            User.findByIdAndDelete(user._id);
            res.status(404).json({ message: "Account was deleted" });
          } else {
            User.findByIdAndDelete(user._id).then(async (respons) => {
              if (respons) {
                await Board.findByIdAndDelete(board._id);
              }
            });
          }
        });
        User.findByIdAndDelete(user._id);
        res.status(404).json({ message: "Account was deleted" });
      } else {
        User.findByIdAndDelete(user._id).then((respons) => {
          if (respons) {
            res.status(404).json({ message: "Account was deleted" });
          }
        });
      }
    } else {
      res.status(404).json({ message: "request User not  Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "There was a server side problem" });
  }
};

module.exports = deleteUserHendler;
