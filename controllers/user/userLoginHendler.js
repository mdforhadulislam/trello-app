const curd = require("../../lib/curdOparations");
const { tokenGenaretor } = require("../../utils/tokensMethord");
const utilites = require("../../utils/utilites");

const userLoginHendler = (req, res) => {
   try {
      let { email, password } = req.body;

      email = email.length > 0 ? email.trim() : false;
      password = password.length > 0 ? password.trim() : false;

      if (email && password) {
         curd.read("user", (err, data) => {
            if (err) {
               const findUser = data.find((user) => user.email === email);

               if (findUser && utilites.compeaData(password, findUser.password)) {
                  curd.read("token", (err, data) => {
                     if (err) {
                        const findId = data.filter((token) => token.id === findUser.id);
                        if (findId.length <= 2) {
                           tokenGenaretor(findUser.id, (err, data) => {
                              if (err) {
                                 res
                                    .status(200)
                                    .json({ message: "login successfull", token: data });
                              } else {
                                 res
                                    .status(500)
                                    .json({ message: "Internal Server Error" });
                              }
                           });
                        } else {
                           res.status(200).json({ message: "you are Login" });
                        }
                     } else {
                        res.status(500).json({ message: "Internal Server Error" });
                     }
                  });
               } else {
                  res.status(400).json({ message: "you are not allow" });
               }
            } else {
               res.status(404).json({ message: "not found" });
            }
         });
      } else {
         res.status(400).json({ message: "send valid data" });
      }
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
}

module.exports = userLoginHendler;
