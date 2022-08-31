const curd = require("../../../lib/curdOparations");
const convartJSON = require("../../../util/convartJSON");
const parsrJSON = require("../../../util/parsrJSON");

const putAccountHendler = (req, res) => {
  try {
    // query peramiters to get username
    const { username } = req.params;

    //  recive user posted data
    let { name, username: userUsername, email, password } = req.body;

    //  checknig all filed
    name = name.length > 0 ? name : false;
    userUsername = userUsername.length > 0 ? userUsername : false;
    email = email.length > 10 ? email : false;
    password = password.length > 0 ? password : false;

    //  if user any data can update and check the field
    if (name || userUsername || email || password) {
      curd.read(
        "users",
        /**
         *
         * @param {boolean} err
         * @param {Array} data
         * @returns
         */
        (err, data) => {
          const datas = parsrJSON(data);

          // checking username maching to other user
          const checkUserUsername = datas.find(
            /**
             * @param {object} user
             * @returns {object} object
             */
            (user) => user.username === userUsername
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
            return res.status(400).json({ message: "this email alrady used" });
          }

          const findUser = datas.find(
            /**
             *
             * @param {object} user
             * @returns object
             */
            (user) => user.username === username
          );
          if (err && findUser) {
            // define new user object and filed value update and updateAt propartics update
            const userUpdateData = {
              ...findUser,
              name: name ? name : findUser.name,
              username: userUsername ? userUsername : findUser.username,
              email: email ? email : findUser.email,
              password: password ? password : findUser.password,
              updateAt: new Date(),
            };

            // delete user old data to databse
            curd.delete(
              "users",
              findUser.id,
              /**
               *
               * @param {boolean} err
               * @param {Array} data
               */
              (err, data) => {
                if (err && data) {
                  // finally create add new data
                  curd.create(
                    "users",
                    userUpdateData,
                    /**
                     *
                     * @param {boolean} err
                     * @param {Array} data
                     */
                    (err, data) => {
                      if (err && data) {
                        res.status(200).json(userUpdateData);
                      } else {
                        res
                          .status(500)
                          .json({ message: "Internal Server Error" });
                      }
                    }
                  );
                } else {
                  res.status(404).json({ message: "user not found" });
                }
              }
            );
          }
        }
      );
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = putAccountHendler;
