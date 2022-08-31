const curd = require("../../lib/curdOparations");

const putBoardHendler = (req, res) => {
  try {
    // get to query board id
    const { id } = req.params;

    // get board updatet data
    const { name, color } = req.body;

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
            };

            // delete to database old data
            curd.delete(
              "boards",
              newBoard.id,
              /**
               *
               * @param {boolean} err
               * @param {Array} data
               */
              (err, data) => {
                // if err true
                if (err) {
                  // create new data object in database
                  curd.create(
                    "boards",
                    newBoard,
                    /**
                     *
                     * @param {boolean} err
                     * @param {Array} data
                     */
                    (err, data) => {
                      if (err) {
                        res.status(200).json(newBoard);
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
              }
            );
          } else {
            res.status(404).json({ message: "board not found" });
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

module.exports = putBoardHendler;
