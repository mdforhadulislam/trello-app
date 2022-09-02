const curd = require("../../lib/curdOparations");
const { tokenDestroy, tokenFind } = require("../../utils/tokensMethord");

function userLogoutHendler(req, res) {
   try {
      const { headers } = req;

      const token = headers.authorization.split(" ")[1];
      if (token) {
         tokenFind(token, (data) => {
            if (data) {
               tokenDestroy(data.id, (data) => {
                  if (data) {
                     res.status(203).json({ message: "success" });
                  }
               });
            } else {
               res.status(500).json({ message: "you are not allow" });
            }
         });
      } else {
         res.status(500).json({ message: "send token" });
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
   }
}
module.exports = userLogoutHendler;
