const http = require('http')
const fs = require("fs");

http.createServer((request, response) => {
    console.log(request.url);
    let fileName = '';
    if (request.url === '/abc') {
        fileName = './test1.html'
    } else {
        fileName = './test2.html'
    }
    let buf = fs.readFileSync(fileName)
    response.write(buf)
    response.end()
}).listen(3000, () => {
    console.log('localhost:3000 start');
})