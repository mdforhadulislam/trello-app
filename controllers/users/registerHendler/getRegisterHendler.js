const curd = require("../../../lib/curdOparations");
const parsrJSON = require("../../../utilities/parsrJSON");

const getRegisterHendler = (req, res) => {
  try {
    // query peramiter to get username
    const { username } = req.params;
    //  ckeck the user to database
    curd.read(
      "users",
      /**
       * @param {boolean} err
       * @param {Array} data
       */
      (err, data) => {
        // covart database data boject
        const datas = parsrJSON(data);
        //   checking the user find to database
        const findData = datas.find(
          /**
           * @param {object} user
           * @returns {object}object
           */
          (user) => user.username === username
        );
        //   if find user
        if (err && findData) {
          res.status(200).json(findData);
        } else {
          res.status(404).json({ message: "user not found" });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getRegisterHendler;
