const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();
const cors = require("cors");

// all env variables
const port = process.env.PORT;
const secret = process.env.SECRET;

// all  middlerwares connects
app.use(cors());
app.use(express.json());
app.use(
  session({
    name: "trellor-application-session-key",
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);

// database connection
require("./dbConfig");

// import router files
const authRouter = require("./router/authRouter");
const boardRouter = require("./router/boardRouter");
const listRouter = require("./router/listRouter");
const todoRouter = require("./router/todoRouter");
const { ckeckLogin } = require("./middlewares/checkLogin");
// routes configarations
app.use("/auth", authRouter);
app.use("/api/boards", ckeckLogin, boardRouter);
app.use("/api/lists", listRouter);
app.use("/api/todos", todoRouter);

app.get("/", (req, res) => {
  res.send(` 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="trellor web backend application" />
    <title>routing url</title>
  </head>
  <body>
    <ul>
      <li><a href="/auth/register">Register</a></li>
      <li><a href="/auth/login">Login</a></li>
      <li><a href="/auth/logout">Logout</a></li>
      <li><a href="/api/boards">CURD oparation under the boards</a></li>
      <li><a href="/api/lists">CURD oparation under the lists</a></li>
      <li><a href="/api/todos">CURD oparation under the todos</a></li>
    </ul>
  </body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`server is runing this port http://localhost:${port}/`);
});
