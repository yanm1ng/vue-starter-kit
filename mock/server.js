const jsonServer = require('json-server')
const mock = require('mockjs')
const db = require('./db.js')

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

const rewriter = jsonServer.rewriter({
  "/project/:page/comments.action": "/project_comments?_page=:page&_limit=5",
  "/comment/add.action": "/push_comment"
})

server.use(middlewares)
server.use((request, res, next) => {
  request.method = 'GET';
  next();
})

server.use(rewriter)
server.use(router)

server.listen(3000, () => {
  console.log('mock server is running')
})