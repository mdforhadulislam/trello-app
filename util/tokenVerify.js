const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;


const tokenVerify = (token)=>{
   const userToken = req.headers.authorization.split(" ")[1];
   const user = jwt.verify(userToken, jwtSecret).trim();
   return user
}

module.exports = tokenVerify