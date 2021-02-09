const express = require('express')

const router = express.Router()

router.get('/', (request, response, next) => {
    response.send('hello')
})

router.get('/index', (request, response, next) => {
    response.send('index page!')
})

module.exports = router