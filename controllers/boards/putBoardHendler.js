const curd = require("../../lib/curdOparations");
const parsrJSON = require("../../util/parsrJSON");

const putBoardHendler = (req, res) => {
  try {
    const { id } = req.params;
    curd.read("boards", (err, data) => {
      if (err) {
         const datas = parsrJSON(data)


      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = putBoardHendler;
