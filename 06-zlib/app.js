const fs = require('fs')
const zlib = require('zlib')

// 复制文件
// const readStream = fs.createReadStream('./log.txt')
// const writeStream = fs.createWriteStream('./log2.txt')
// readStream.pipe(writeStream)

// 压缩文件
const readStream = fs.createReadStream('./log.txt')
const writeStream = fs.createWriteStream('./log.gzip')

const gzip = zlib.createGzip()
readStream.pipe(gzip).pipe(writeStream)