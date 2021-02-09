const fs = require('fs');
const path = require('path')
const mime = require('mime')

function readFile(readStaticFile) {
    return new Promise((resolve, reject) => {
        fs.readFile(readStaticFile, (err, content) => {
            if (err) {
                resolve('该路径为文件夹，切该文件夹下没有 index.html')
            } else {
                resolve(content)
            }
        })
    })
}

async function readStaticFile(readStaticFile) {
    let ext = path.parse(readStaticFile).ext
    let mimeType = mime.getType(ext) || 'text/html'
    let data

    // 如果该路径是否存在
    if (fs.existsSync(readStaticFile)) {
        // 判断该路径是否为文件还是文件夹
        if (ext) {
            data = await readFile(readStaticFile)
        } else {
            data = await readFile(path.join(readStaticFile, '/index.html'))
        }
    } else {
        // 否则提示：该路径不存在
        data = '该路径不存在'
    }


    return {
        data, mimeType
    }
}

module.exports = readStaticFile