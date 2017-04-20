var Mock = require('mockjs');

module.exports = () => {
    var db = {
      project_comments: Mock.mock({
        "comments|10": [{
          "author": "@name",
          "comment": "@cparagraph",
          "date": "@datetime"
        }],
        "next": "@increment"
      })
    }
    return db;
};