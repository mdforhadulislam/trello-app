const curd = require("../../../lib/curdOparations");
const parsrJSON = require("../../../util/parsrJSON");
const commpear = require("../../../util/commpear");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const postLoginHendler = (req, res, _next) => {
  try {
    // check posted data
    const email = req.body.email.length > 0 ? req.body.email.trim() : false;
    const password =
      req.body.password.length > 0 ? req.body.password.trim() : false;

    //  if email and password is true the i find the user in database
    if (email && password) {
      curd.read(
        "users",
        /**
         * @param {boolean} err
         * @param {Array} data
         */
        (err, data) => {
          if (err) {
            // databse json data convating Array
            const datas = parsrJSON(data);

            // finding the user in Array
            const findUser = datas.find((user) => user.email === email);

            // if user is true
            if (findUser) {
              // user email checking
              if (findUser.email === email) {
                // user password is checking
                if (commpear(password, findUser.password)) {
                  // finally save the user in session
                  req.session.user = findUser.username;

                  // generate by token for users
                  const token = jwt.sign(findUser.username, jwtSecret);
                  res
                    .status(200)
                    .json({ message: "login successfull", token: token });
                } else {
                  res.status(400).json({ message: "send a right password" });
                }
              } else {
                res
                  .status(400)
                  .json({ message: "this email address is not allowed" });
              }
            } else {
              res.status(404).json({ message: "user not found" });
            }
          } else {
            res.status(500).json({ message: "Internal Server Error" });
          }
        }
      );
    } else {
      res.status(400).json({ message: "send valid data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = postLoginHendler;
