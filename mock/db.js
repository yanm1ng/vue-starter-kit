var Mock = require('mockjs');

module.exports = () => {
    var db = {
      project_comments: Mock.mock({
        "comments|5": [{
          "author": "@name",
          "comment": "@cparagraph",
          "date": "@datetime"
        }],
        "next": "@increment"
      }),
      push_comment: Mock.mock({
        "error": 0,
        "message": "成功"
      })
    }
    return db;
};