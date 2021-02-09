const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

http.createServer(async (request, response) => {
    let requestUrl = request.url
    let realfilePath = path.join(__dirname, '/public', requestUrl)

    let { data, mimeType } = await readStaticFile(realfilePath)

    // console.log(data);
    response.writeHead(200, {
        'Content-Type': `${mimeType};charset=utf-8`
    })

    response.end(data)
}).listen(9000, () => {
    console.log('localhost:9000 start');
})