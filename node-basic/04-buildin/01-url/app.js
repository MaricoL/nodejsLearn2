const url = require('url')

const urlString = "https://www.baidu.com:443/abcd/?username=zhangsan&password=123#tag=3"
const urlObj = new URL(urlString)

console.log(urlObj.searchParams)        // URLSearchParams { 'username' => 'zhangsan', 'password' => '123' }
console.log(urlObj.searchParams.get("username"))        // zhangsan


const params = new URLSearchParams(new URL(urlString).searchParams)
console.log(params.get("password"));