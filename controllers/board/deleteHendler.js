const Board = require("../../models/Board")

const deleteBoardHendler = async(req, res) => {

   try {
      const { _id } = req.params;
      const deletedBoard = await Board.findByIdAndDelete(_id);
  
      if (deletedBoard.user.email === req.session.user.email) {
        if (deletedBoard) {
          return res
            .status(200)
            .json({ message: "board Deleted", board: deletedBoard });
        } else {
          return res.status(404).json({ message: "No board found" });
        }
      } else {
        res
          .status(404)
          .json({ message: "you are not allow to delete this board" });
      }
    } catch (error) {
      console.log(error);
       res.status(404).json({ message: "There was a server side problem " });
    }

};

module.exports = deleteBoardHendler;
