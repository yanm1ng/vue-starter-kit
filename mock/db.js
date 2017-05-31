var Mock = require('mockjs');

module.exports = {
  project_comments: Mock.mock({
    "error": 0,
    "message": "success",
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  push_comment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  })
};