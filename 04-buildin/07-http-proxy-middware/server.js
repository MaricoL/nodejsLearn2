const http = require('http')
const fs = require('fs')
const { createProxyMiddleware } = require('http-proxy-middleware')

http.createServer((request, response) => {
    response.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })


    if (/\/ajax/.test(request.url)) {
        let proxy = createProxyMiddleware('/ajax', {
            target: 'https://m.lagou.com',
            changeOrigin: true,
            pathRewrite: {
                '^/ajax': ''
            }
        })
        proxy(request, response)
    } else {
        response.end('error')
    }

}).listen(9000, () => {
    console.log('localhost:9000 start');
})