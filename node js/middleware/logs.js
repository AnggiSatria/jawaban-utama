const logRequest = (req, res, next) => {
  console.log(`fetching data on path ${req.path}`);
  next();
};

module.exports = {
  logRequest,
};
