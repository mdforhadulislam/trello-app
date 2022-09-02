const curd = require("../../lib/curdOparations");
const utilites = require("../../utils/utilites");

const deleteAccountHendler = (req, res) => {
   try {
      const { username } = req.params;
      curd.read("user", (err, data) => {
         if (err) {
            const findUser = utilites.find(data, "username", username);
            if (findUser) {
               curd.delete("user", findUser.id, (err, data) => {
                  if (err) {
                     res.status(200).json(findUser);
                  } else {
                     res.status(500).json({ message: "Internal Server Error" });
                  }
               });
            } else {
               res.status(404).json({ message: "user not found" });
            }
         } else {
            res.status(500).json({ message: "Internal Server Error" });
         }
      });
   } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
   }
}

module.exports = deleteAccountHendler;
