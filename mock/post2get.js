module.exports = function (request, res, next) {
  request.method = "GET";
  next();
}