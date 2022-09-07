const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app/app");

const port = process.env.PORT || 3000;

const createServer = http.createServer(app);

createServer.listen(port, () => {
  console.log(`Server Listening Port http://localhost:${port}/`);
});
