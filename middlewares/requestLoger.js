const requestLoger = (req, res, next) => {
  const { path, method } = req;
  const { statusCode } = res;
  const port = process.env.PORT;
  const time = new Date().toLocaleString();

  console.log(
    `localhost:${port}${path} -- ${method} -- ${statusCode} -- ${time}`
  );
  
  next();
};

module.exports = requestLoger;
