const curd = require("../../lib/curdOparations");

const patchBoardHendler = (req, res) => {
  try {
    // get to query board id
    const { id } = req.params;

    // get board updatet data
    let { name, color } = req.body;

    name = name.length > 0 ? name : false;
    color = color.length > 0 ? color : false;

    if (name || color) {
      // get database to recive all board data
      curd.read(
        "boards",
        /**
         *
         * @param {boolean} err
         * @param {Array} data
         */
        (err, data) => {
          if (err) {
            // convart data json to array
            const datas = JSON.parse(data);

            // filter to data and update main object
            const findBoard = datas.find(
              /**
               *
               * @param {object} board
               * @returns {object}object
               */
              (board) => board.id === id
            );

            if (findBoard) {
              const newBoard = {
                ...findBoard,
                name,
                color,
                updateAt: new Date(),
              };

              // delete to database old data
              curd.update("boards", findBoard.id, newBoard, (err, data) => {
                if (err) {
                  res.status(500).json(data);
                } else {
                  res.status(500).json({ message: "board not updated" });
                }
              });
            } else {
              res.status(404).json({ message: "board not found" });
            }
          } else {
            res.status(500).json({ message: "Internal Server Error" });
          }
        }
      );
    } else {
      res.status(500).json({ message: "send a valid data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = patchBoardHendler;
