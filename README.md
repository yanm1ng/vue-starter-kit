# vue-starter-kit

> A Vue.js project with mock-server and unit-test

## components

* [header](https://github.com/yanm1ng/vue-starter-kit/blob/master/src/components/header.vue)
* [comment](https://github.com/yanm1ng/vue-starter-kit/blob/master/src/components/comment.vue)
* [address-select](https://github.com/yanm1ng/vue-starter-kit/blob/master/src/components/address.vue)

## features

we use mock.js to build your mock data ( as local database :) ), for example:

```javascript
// db.js
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
}
```

```json
// routes.json
{
  "/project/:page/comments.action": "/project_comments?_page=:page&_limit=5",
  "/comment/add.action": "/push_comment"
}
```

## json-server

we use `json-server` to get a full fake REST API

## unit test

test components and vuex( include `mutations` `actions` `getters` ), test result:

![](https://ww2.sinaimg.cn/large/006tKfTcgy1feyzyw4ia5j31hs0bq7a5.jpg)

## build setup

``` bash
# install json-server
npm install json-server -g

# install dependencies
npm install

# serve with hot reload and mock
npm run start

# serve with hot reload at localhost:8181
npm run dev

# run unit test
npm run test

# run mock server at localhost:3000
npm run mock

# build for production with minification
npm run build
```
## TODO

- [x] add `vuex` to manage app state
- [x] add unit test
- [ ] refresh the mock server after modifying `mock/db.js`