const curd = require("../../../lib/curdOparations");
const parsrJSON = require("../../../utilities/parsrJSON");

const deleteRegisterHendler = (req, res) => {
  try {
    // query peramiters to get username
    const { username } = req.params;

    //  get data to database
    curd.read(
      "users",
      /**
       * @param {boolean} err
       * @param {Array} data
       */
      (err, data) => {
        // convart data to object
        const datas = parsrJSON(data);
        if (err) {
          // find user to database
          const findUser = datas.find((user) => user.username === username);

          //  delete user to databse
          curd.delete("users", findUser.id, (err, data) => {
            if (err) {
              res.status(200).json(findUser);
            } else {
              res.status(500).json({ message: "Internal Server Error" });
            }
          });
        } else {
          res.status(500).json({ message: "Internal Server Error" });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = deleteRegisterHendler;
