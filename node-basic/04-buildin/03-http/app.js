const http = require('http')

const server = http.createServer((request, response) => {
    // 返回 html
    // response.writeHead(200, { 'Content-Type': 'text/html' })
    // response.write('<h1>helle world2</h1>')
    // response.end()

    // 返回 plain
    // response.writeHead(200, { 'Content-Type': 'text/plain' })
    // response.write('<h1>helle world2</h1>')
    // response.end()

    // 返回 json
    response.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
    response.write(`{ "url":"${request.url}"}`)
    response.end()
})

server.listen(8888, () => {
    console.log('start server');
})