const { listUpdateById, listFindById } = require("../../db/config/listCRUD");
const crud = require("../../lib/crud");

const updateListHendler = (req, res) => {
  try {
    const { id } = req.params;

    const findList = listFindById(id);
    if (findList) {
      let { name, color } = req.body;

      name = name.length > 0 ? name : findList.name;
      color = color.length > 0 ? color : findList.color;

      if (name && color) {
        const updateList = {
          ...findList,
          name: name,
          color: color,
          updateAt: new Date(),
        };
        const newList = listUpdateById(findList.id, updateList);

        res.status(400).json(newList);
      } else {
        res.status(400).json({ message: "send valid value" });
      }
    } else {
      res.status(400).json({ message: "list not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Intarnal Server Error" });
  }
};

module.exports = updateListHendler;
