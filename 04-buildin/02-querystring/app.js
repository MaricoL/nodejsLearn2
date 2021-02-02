const querystring = require('querystring')

const query = "id=2&name=zhangsan&from=上海"
const queryObj = { id: 2, name: 'zhangsan', from: '上海' }
const queryEscape = "id%3D2%26name%3Dzhangsan%26from%3D%E4%B8%8A%E6%B5%B7"


console.log(querystring.parse(query));      // { id: '2', name: 'zhangsan', from: '上海' }
console.log(querystring.stringify(queryObj));   // id=2&name=zhangsan&from=%E4%B8%8A%E6%B5%B7
// stringify 第一个参数为键值对之间的分隔符，第二个参数为键和值之间的符号
console.log(querystring.stringify(queryObj, '/', ':')); // id:2/name:zhangsan/from:%E4%B8%8A%E6%B5%B7


// escape：将querystring进行unicode编码
console.log(querystring.escape(query));   // id%3D2%26name%3Dzhangsan%26from%3D%E4%B8%8A%E6%B5%B7
// unescape：将带有unicode编码的querystring解码
console.log(querystring.unescape(queryEscape));   // id=2&name=zhangsan&from=上海

console.log(querystring.stringify(queryObj, null, null, {
    encodeURIComponent: (string) => {
        return querystring.unescape(string)
    }
}));        // id=2&name=zhangsan&from=上海

