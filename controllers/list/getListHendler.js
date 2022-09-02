const curd = require("../../lib/curdOparations");
const { tokenToGetUser } = require("../../utils/tokensMethord");


const getListHendler = (req, res) => {
   try {
      const { bi } = req.query
      console.log(req);
      curd.read("board", (err, boards) => {
         if (err) {
            tokenToGetUser(req, (err, user) => {
               if (err) {

                  const findBoard = boards.find(board => board.id === bi)
                  if (findBoard) {
                     if (findBoard.user.id === user.id) {
                        curd.read("list", (err, data) => {
                           if (err) {
                              // findBoard.lists.find(id => id === list.id)
                              const filteringList = data.filter(list => list.board_id === bi)
                              if (filteringList) {

                                 res.status(200).json(filteringList);
                              } else {

                                 res.status(500).json({ message: "Internal Server Error" });
                              }

                           } else {

                              res.status(500).json({ message: "Internal Server Error" });
                           }


                        })


                     } else {

                        res.status(406).json({ message: "you are not allow" });
                     }

                  } else {

                     res.status(404).json({ message: "Board was not found" });
                  }

               } else {

                  res.status(400).json({ message: "send your token id" });
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

module.exports = getListHendler



