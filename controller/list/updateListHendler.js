const { listUpdateById, listFindById } = require("../../db/config/listCRUD");
const crud = require("../../lib/crud");

const updateListHendler = (req, res) => {
  try {
    const { id } = req.params;
    let { name, color } = req.body;

    name = name.length > 0 ? name : false;
    color = color.length > 0 ? color : "";

    if (name && color) {
      const newList = listUpdateById(id, name, color);

      res.status(400).json(newList);
    } else {
      res.status(400).json({ message: "send valid value" });
    }
  } catch (error) {
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = updateListHendler;
