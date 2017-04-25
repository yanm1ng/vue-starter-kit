# vue-starter-kit

> A Vue.js project with mock-server and unit-test

## features

we use mock.js to build your mock data ( as local database :) ), for example:

```javascript
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