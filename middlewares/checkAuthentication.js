const curd = require("../lib/curdOparations");
const { tokenVerify, tokenFind } = require("../utils/tokensMethord");
const utilites = require("../utils/utilites");

function checkAuthentication(req, res, next) {
   try {
      const { headers } = req
      if (headers.authorization && headers.authorization.split(" ")[0] === "Bearer") {
         const token = headers.authorization.split(" ")[1]
         tokenFind(token, (token) => {
            if (token) {
               next()
            } else {

               res.status(203).json({ message: "Authentication Failed" })
            }
         })
      } else {
         res.status(203).json({ message: "Authentication Failed" })
      }



   } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
   }
}

module.exports = checkAuthentication