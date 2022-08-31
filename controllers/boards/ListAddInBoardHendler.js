const curd = require("../../lib/curdOparations");
const findData = require("../../util/findData");

const ListAddInBoardHendler = (req, res) => {
  try {
    // query to get board id and list id
    const { boardId, listId } = req.params;

    // checking perpas
    if (boardId && listId) {
      // get all board data to database
      curd.read(
        "boards",
        /**
         * @param {boolean} err
         * @param {Array} data
         */
        (err, data) => {
          // if error true then next step
          if (err) {
            // json data convat to js object
            const datas = JSON.parse(data);

            // find board to database
            const findBoard = findData(datas, "id", boardId);

            // if board founded then go to next
            if (findBoard) {
              // get list in database
              curd.read(
                "lists",
                /**
                 * @param {boolean} err
                 * @param {Array} data
                 */
                (err, data) => {
                  // if list is founded the err was true
                  if (err) {
                    // convart json to js object
                    const datas = JSON.parse(data);
                    const findList = findData(datas, "id", listId);
                    // if list is founded the update ouer boards
                    if (findList) {
                      // update board
                      const updateBoard = {
                        ...findBoard,
                        list: [...findBoard.list, findList.id],
                        updateAt: new Date(),
                      };

                      // finally updated board
                      curd.update(
                        "boards",
                        findBoard.id,
                        updateBoard,
                        /**
                         * @param {boolean} err
                         * @param {Array} data
                         */
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
                      res.status(500).json({ message: "list not found" });
                    }
                  } else {
                    res.status(500).json({ message: "list not found" });
                  }
                }
              );
            } else {
              res.status(500).json({ message: "board not found" });
            }
          } else {
            res.status(500).json({ message: "board not found" });
          }
        }
      );
    } else {
      res.status(500).json({ message: "bad request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = ListAddInBoardHendler;
