const express = require('express')

const app = express()

app.use('/', [
    (request, response, next) => {
        console.log(1);
        next()
    },
    (request, response, next) => {
        console.log(2);
        next()
    },
])

app.use('/api', (request, response) => {
    response.send('api')
})

app.listen(9000, () => {
    console.log('localhost:9090 start');
})