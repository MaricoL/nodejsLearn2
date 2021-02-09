const crypto = require('crypto')

let password = '你好'

const result = crypto
    .createHash('sha1')     // 使用sha1算法加密
    .update(password)       // 需要加密的内容
    .digest('hex')          // 加密后的密文以 十六进制 字符展示

console.log(result);        // 6367c48dd193d56ea7b0baad25b19455e529f5ee 