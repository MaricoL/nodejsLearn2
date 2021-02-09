const http = require('http')
const url = require('url')
const querystring = require('querystring')

http.createServer((request, response) => {
    let requestUrl = request.url
    let urlObj = url.parse(requestUrl, true)
    switch (urlObj.pathname) {
        case '/api/list':
            response.write(`${urlObj.query.cb}('hello')`)
            break;
        default:
            response.write('page not found')
    }
    response.end()
}).listen(8080, () => {
    console.log('localhost:8080 start');
})