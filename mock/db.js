var Mock = require('mockjs');

module.exports = () => {
  var db = {
    project_comments: function() {
      var res = [];
      for (let i = 0; i < 40; i++) {
        res.push(Mock.mock({
          "author": "@name",
          "comment": "@cparagraph",
          "date": "@datetime"
        }))
      }
      return res;
    }(),
    push_comment: Mock.mock({
      "error": 0,
      "message": "成功"
    })
  }
  return db;
};