const express = require('express')
const app = express()
const router = require('./router/index')

app.use('/', router)

app.listen(9000, () => {
    console.log('localhost:9000 start');
})