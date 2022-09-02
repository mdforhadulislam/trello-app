const curd = require("../../lib/curdOparations");
const utilites = require("../../utils/utilites");

const putAccountHendler = (req, res) => {
   try {
      const { username } = req.params;
      let { updatedName, updatedUsername, updatedEmail, updatedPassword } =
         req.body;

      updatedName = updatedName.length > 0 ? updatedName : false;
      updatedUsername = updatedUsername.length > 0 ? updatedUsername : false;
      updatedEmail = updatedEmail.length > 0 ? updatedEmail : false;
      updatedPassword = updatedPassword.length > 0 ? updatedPassword : false;

      curd.read("user", (err, data) => {
         if (err) {
            const findUser = utilites.find(data, "username", username);
            if (findUser) {
               // check any other to match user data
               const checkUsername = utilites.find(data, "username", username);
               const checkEmail = utilites.find(data, "email", email);
               // when founded user data then send err
               if (checkUsername && checkEmail) {
                  return res
                     .status(400)
                     .json({ message: "username and email alredy used" });
               }
               if (checkUsername) {
                  return res.status(400).json({ message: "username alredy used" });
               }
               if (checkEmail) {
                  return res.status(400).json({ message: "email alredy used" });
               }
               if (
                  updatedName ||
                  updatedUsername ||
                  updatedEmail ||
                  updatedPassword
               ) {
                  const updatedUser = {
                     ...findUser,
                     name: updatedName ?? findUser.name,
                     username: updatedUsername ?? findUser.username,
                     email: updatedEmail ?? findUser.email,
                     password: updatedPassword ?? findUser.password,
                     updateAt: new Date(),
                  };
                  curd.update("user", findUser.id, updatedUser, (err, data) => {
                     if (err) {
                        res.status(200).json(data);
                     } else {
                        res.status(500).json({ message: "Internal Server Error" });
                     }
                  });
               }
            } else {
               res.status(404).json({ message: "user not found" });
            }
         } else {
            res.status(404).json({ message: "user not found" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
};

module.exports = putAccountHendler;
