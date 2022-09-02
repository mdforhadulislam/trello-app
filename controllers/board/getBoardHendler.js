const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const getBoardHendler = (req, res) => {

   try {
      tokenToGetUser(req, (err, user) => {
         if (err) {
            curd.read("board", (err, data) => {
               if (err) {
                  const filteringBoard = data.filter(board => board.user.id === user.id)
                  if (filteringBoard) {

                     res.status(200).json(filteringBoard);
                  } else {

                     res.status(404).json({ message: "boards not found" });
                  }

               } else {

                  res.status(500).json({ message: "Internal Server Error" });
               }
            })

         } else {

            res.status(500).json({ message: "Internal Server Error" });
         }
      })
   } catch (error) {

      res.status(500).json({ message: "Internal Server Error" });
   }

}
const singleGetBoardHendler = (req, res) => {
   try {
      tokenToGetUser(req, (err, user) => {
         if (err) {
            const { id } = req.params

            curd.read("board", (err, data) => {
               if (err) {
                  const findBoard = utilites.find(data, "id", id)
                  if (findBoard) {

                     if (findBoard.user.id === user.id) {

                        res.status(200).json(findBoard)
                     } else {

                        res.status(400).json({ message: "you are not allow" });
                     }

                  } else {

                     res.status(404).json({ message: "not found" });
                  }


               } else {

                  res.status(500).json({ message: "Internal Server Error" });
               }
            })
         } else {

            res.status(500).json({ message: "Internal Server Error" });
         }
      })


   } catch (error) {

      res.status(500).json({ message: "Internal Server Error" });
   }
}

module.exports = {
   getBoardHendler, singleGetBoardHendler
}