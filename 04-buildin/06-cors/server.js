const http = require('http')
const url = require('url')

http.createServer((request, response) => {
    let requestUrl = request.url
    let urlObj = url.parse(requestUrl, true)
    switch (urlObj.pathname) {
        case '/api/list':
            response.writeHead(200, {
                'Content-Type': 'applicaton/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            })
            response.write(`{"username":"张三","age":18}`)
            break;
        default:
            response.write('page not found')
    }
    response.end()
}).listen(8080, () => {
    console.log('localhost:8080 start');
})