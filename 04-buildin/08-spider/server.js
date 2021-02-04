const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

http.createServer((request, response) => {
    let data = ''
    https.get('https://www.meizu.com/', result => {
        result.on('data', chunk => {
            data += chunk
        })
        result.on('end', () => {
            resolveDocument(data)
        })
    })
}).listen(8080, () => {
    console.log('localhost:8080 start');
})

function resolveDocument(data) {
    const $ = cheerio.load(data);
    $('.section-item-box .goods-name').each((index, value) => {
        console.log($(value).text());
    })

}