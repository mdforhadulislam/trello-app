const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app/app");

const port = process.env.PORT;

const createServer = http.createServer(app);

createServer.listen(3000, () => {
  console.log(`Server Listening Port http://localhost:${port}/`);
});
