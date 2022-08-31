const curd = require("../../lib/curdOparations");

const deleteBoardHendler = (req, res) => {
  try {
    // get to query board id
    const { id } = req.params;

    //  read to database
    curd.read(
      "boards",
      /**
       * @param {boolean} err
       * @param {Array} data
       */
      (err, data) => {
        if (err) {
          // file data convart to object
          const datas = JSON.parse(data);

          //  filde board in database
          const findBoard = datas.find(
            /**
             *
             * @param {object} board
             * @returns {object} object
             */
            (board) => board.id === id
          );
          //  if find board in database
          if (findBoard) {
            // then delete this board
            curd.delete(
              "boards",
              findBoard.id,
              /**
               *
               * @param {boolean} err
               * @param {Array} data
               */
              (err, data) => {
                if (err) {
                  res.status(500).json({
                    message: "successfully was deleted by board",
                    board: findBoard,
                  });
                } else {
                  res.status(500).json({ message: "Boards not deleted" });
                }
              }
            );
          } else {
            res.status(500).json({ message: "Internal Server Error" });
          }
        } else {
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteBoardHendler;
