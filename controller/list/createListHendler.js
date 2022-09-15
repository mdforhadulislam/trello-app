const { listCreate } = require("../../db/config/listCRUD");

const createListHendler = (req, res) => {
  try {
    let { name, color, board_id } = req.body;

    name = name.length > 0 ? name : false;
    color = color.length > 0 ? color : false;
    board_id = board_id.length > 0 ? board_id : false;

    if (name && color && board_id) {
      const newList = listCreate(name, color, board_id);
      if (newList) {
        res.status(200).json(newList);
      } else {
        res.status(400).json({ message: "board not found" });
      }
    } else {
      res.status(400).json({ message: "send valid data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = createListHendler;
