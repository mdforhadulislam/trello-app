const curd = require("../../lib/curdOparations");
const List = require("../../models/List");
const utilites = require("../../utils/utilites");

const postListHendler = (req, res) => {
  try {
    let { name, color, board_id } = req.body;

    name = name.length > 0 ? name : false;

    const newList = new List(name, color, board_id);

    curd.create("list", newList, (err, listData) => {
      if (err) {
        curd.read("board", (err, data) => {
          if (err) {
            const findBoard = utilites.find(data, "id", board_id);
            if (findBoard) {
              const updatedBoard = {
                ...findBoard,
                lists: [...findBoard.lists, newList.id],
              };
              if (updatedBoard) {
                curd.update(
                  "board",
                  findBoard.id,
                  updatedBoard,
                  (err, data) => {
                    if (err) {
                      res.status(200).json(listData);
                    } else {
                      res
                        .status(500)
                        .json({ message: "Internal Server Error" });
                    }
                  }
                );
              } else {
                res.status(500).json({ message: "Internal Server Error" });
              }
            } else {
              res.status(404).json({ message: "board was not found" });
            }
          } else {
            res.status(500).json({ message: "Internal Server Error" });
          }
        });
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = postListHendler;
