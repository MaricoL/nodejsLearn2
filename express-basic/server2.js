const express = require('express')
const path = require('path')
const app = express()
const router = require('./router/index')
const bodyParser = require('body-parser')

// 使用第三方中间件：body-parser 接受 POST/PUT/PATCH/DELETE 请求中的 body 数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 设置静态资源目录
app.use(express.static('./public'))

// 设置 art-template 模版引擎
app.engine('art', require('express-art-template'));

app.set('view options', {   // 注意：此处与官网配置不一样 
    debug: process.env.NODE_ENV !== 'production',
    escape: false
});
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'art');

// 设置路由
app.use('/', router)

app.listen(9000, () => {
    console.log('localhost:9000 start');
})