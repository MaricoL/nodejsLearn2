const express = require('express')

const router = express.Router()


// const { list } = require('../controller/index')
// 最后的 index 可以省略
const { list } = require('../controller')

router.get('/api/list', list)

// GET：获取
// router.get('/', (request, response, next) => {
//     response.send('hello')
// })

// router.get('/index', (request, response, next) => {
//     const queryObj = request.query
//     // console.log(queryObj);              // { id: '2' }

//     // 返回 JSON 对象： response.send(queryObj) 或 response.json(queryObj)
//     // response.send(queryObj)
//     response.json(queryObj)
// })

// // POST：添加
// router.post('/index', (request, response, next) => {
//     const bodyObj = request.body
//     console.log(request.headers);
//     console.log(bodyObj);                   // [Object: null prototype] { username: 'linzeli', password: '12345' }

//     // response.send(bodyObj)
//     response.json(bodyObj)
// })

// // PUT：修改————覆盖式修改
// router.put('/index', (request, response, next) => {
//     const bodyObj = request.body
//     response.send('put response')
// })

// // PATCH：修改————少量修改
// router.patch('/index', (request, response, next) => {
//     const bodyObj = request.body
//     response.send('patch response')
// })

// // DELETE：删除
// router.delete('/index', (request, response, next) => {
//     const bodyObj = request.body
//     response.send('delete response')
// })

// all()：所有请求方式都可以进入
// router.all('/index', (request, response, next) => {
//     response.send('all')
// })

module.exports = router