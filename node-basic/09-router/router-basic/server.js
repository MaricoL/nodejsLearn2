const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    const requestUrl = request.url
    switch (requestUrl) {
        case '/':
            response.end('hello')
            break;
        case '/home':
            fs.readFile('./hello.html', (err, content) => {
                response.end(content)
            })
            break;
        case '/hello.js':
            fs.readFile('./hello.js', (err, content) => {
                response.end(content)
            })
            break;
        case '/1.jpg':
            fs.readFile('./1.jpg', (err, content) => {
                response.end(content)
            })
            break;
        default:
            response.end('page not found!')
    }
}).listen(9000, () => {
    console.log('localhost:9000 start');
})