const curd = require("../../lib/curdOparations")
const Board = require("../../models/Board")
const { tokenToGetUser } = require("../../utils/tokensMethord")
const postBoardHendler = (req, res) => {
   try {
      let { name, color } = req.body

      name = name.length > 0 ? name : false

      if (name || color) {
         tokenToGetUser(req, (err, user) => {
            console.log(user);
            if (err) {
               const reqUser = { id: user.id, user: user.username, email: user.email, }
               const newBoard = new Board(name, color, reqUser)

               curd.create("board", newBoard, (err, data) => {
                  if (err) {

                     res.status(200).json(data);
                  } else {

                     res.status(500).json({ message: "Internal Server Error" });
                  }
               })

            } else {

               res.status(500).json({ message: "Internal Server Error" });
            }
         })
      } else {

         res.status(400).json({ message: "send valid data" });
      }

   } catch (error) {

      res.status(500).json({ message: "Internal Server Error" });
   }
}

module.exports = postBoardHendler