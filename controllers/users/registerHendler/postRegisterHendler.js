const curd = require("../../../lib/curdOparations");
const User = require("../../../models/User");
const bcrypt = require("bcrypt");

const postRegisterHendler = (req, res) => {
  try {
    // get recive user posted data
    let { name, username, email, password } = req.body;

    //  checknig all filed
    name = name.length > 0 ? name.trim() : false;
    username = username.length > 0 ? username.trim() : false;
    email = email.length > 10 ? email.trim() : false;
    password =
      password.length > 0 ? bcrypt.hashSync(password.trim(), 3) : false;

    //  checking data
    if (name && username && email && password) {
      // check database and cheking username and email other user if useing same usernae and email then give an error
      curd.read(
        "users",
        /**
         * @param {Boolean} err
         * @param {Array} data
         */
        (err, data) => {
          if (err) {
            // convar object database data
            let datas = JSON.parse(data);

            // checking username maching to other user
            const checkUserUsername = datas.find(
              /**
               * @param {object} user
               * @returns {object} object
               */
              (user) => user.username === username
            );
            // if true the throw an error
            if (checkUserUsername) {
              return res
                .status(400)
                .json({ message: "this username alrady used" });
            }
            // checking email maching to other user
            const checkUserEmail = datas.find(
              /**
               * @param {object} user
               * @returns {object} object
               */
              (user) => user.email === email
            );

            // if true the throw an error
            if (checkUserEmail) {
              return res
                .status(400)
                .json({ message: "this email alrady used" });
            }

            // when not machting other user username and email then user data add to register database
            const user = new User(name, username, email, password);
            curd.create(
              "users",
              user,
              /**
               *
               * @param {boolean} err
               * @param {object} data
               * @returns {object} object
               */
              (err, data) => {
                // if err not true and have an data the continue to responss
                if (err && data) {
                  return res.status(201).json(data);
                } else {
                  res.status(500).json({ message: "Internal Server Error" });
                }
              }
            );
          }
        }
      );
    } else {
      res.status(400).json({ message: "send valide data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = postRegisterHendler;
