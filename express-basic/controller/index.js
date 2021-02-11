const path = require('path')
const template = require('art-template');
const fs = require('fs');
const listModel = require('../model/list')

const list = (request, response, next) => {
    // 1. 服务端渲染 SSR
    // 返回 HTML
    // let data = '<ul>'
    // for (let i = 0; i < 100; i++) {
    //     data += `<li>line---${i}</li>`
    // }
    // data += '</ul>'
    // response.send(data)

    // 2. 客户端渲染 CSR
    // 服务端只返回数据给客户端，让客户端渲染
    // let dataObj = {
    //     return: true,
    //     data: []
    // }
    // for (let i = 0; i < 100; i++) {
    //     dataObj.data.push(`line---${i}`)
    // }
    // response.send(dataObj)

    // 3. 后端使用 art-template 模版渲染
    // 将一下数据抽取到 model/list.js 中
    // let dataArray = []
    // for (let i = 0; i < 100; i++) {
    //     dataArray.push(`line ${i}`)
    // }

    // 设置响应头，返回的数据格式为 JSON字符串
    // response.set('Content-Type', 'application/json;charset=utf-8')
    // response.render('list', {
    //     data: JSON.stringify(dataArray)
    // })

    // 升级1：将数据渲染成 html文件，直接返回 html 文件
    // response.render('list-html', {
    //     data: dataArray
    // })

    // 升级2：将数据渲染成 html，并生成 html 文件，再返回
    var html = template(path.join(__dirname, '../view/list-html.art'), {
        data: listModel.dataArray
    });
    fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

    response.redirect('/list.html')
}


exports.list = list