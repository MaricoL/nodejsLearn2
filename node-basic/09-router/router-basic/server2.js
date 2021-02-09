const http = require('http')
const fs = require('fs')
const mime = require('mime')

http.createServer((request, response) => {
    const requestUrl = request.url
    console.log(requestUrl);
    console.log(mime.getType(requestUrl));
    const content = fs.readFileSync(`.${requestUrl}`)
    response.writeHead(200, {
        'Content-Type': mime.getType(requestUrl)
    })
    response.end(content)

}).listen(9000, () => {
    console.log('localhost:9000 start');
})