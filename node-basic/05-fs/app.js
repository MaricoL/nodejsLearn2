const fs = require('fs')
const fsPromise = require('fs').promises

// 创建文件夹
// fs.mkdir('./logs', (err) => {
//     if (err) throw err
//     console.log('文件夹创建成功！');
// })

// 重命名文件夹
// fs.rename('./logs', './log', (err) => {
//     console.log('重命名文件夹！');
// })

// 删除文件夹
// fs.rmdir('./log', (err) => {
//     console.log('删除文件夹成功！');
// })

// 读取文件夹
// fs.readdir('./logs', (err, result) => {
//     console.log(result);
// })

// 写文件
// fs.writeFile('./logs/log1.log', 'hello\nworld', err => {
//     if (err) throw err
//     console.log('done.');
// })

// 追加内容到文件
// fs.appendFile('./logs/log1.log', 'abcde', err => {
//     console.log('done');
// })

// 删除文件
// fs.unlink('./logs/log1.log', err => {
//     console.log('done');
// })

// 读取文件(异步方法)
// fs.readFile('./logs/log1.log', (err, content) => {
//     console.log(content);           // <Buffer 68 65 6c 6c 6f 0a 77 6f 72 6c 64>
// })

// 转成utf-8编码
// fs.readFile('./logs/log1.log', 'utf-8', (err, content) => {
//     console.log(content);
// })

// fs.readFile('./logs/log1.log', (err, content) => {
//     console.log(content.toString());
// })

// 读取文件(同步方法)
// let content = fs.readFileSync('./logs/log1.log')
// console.log(content.toString());


// 读取文件(异步方法，使用Promise操作)
//     ; (async () => {
//         let content = await fsPromise.readFile('./logs/log1.log')
//         console.log(content.toString());
//     })()
// console.log('continue...');


// 批量写文件
// for (let i = 0; i < 10; i++) {
//     fs.writeFile(`./logs/log${i}`, `log-${i}`, () => {
//         console.log('done.');
//     })
// }

// 递归文件夹读取文件
function readDir(dir) {
    fs.readdir(dir, (err, fileList) => {
        console.log(fileList);
        fileList.forEach((file, index) => {
            let joinedDir = `${dir}/${file}`
            fs.stat(joinedDir, (err, stats) => {
                if (stats.isDirectory()) {
                    readDir(joinedDir)
                } else {
                    fs.readFile(joinedDir, 'utf-8', (err, content) => {
                        console.log(content);
                    })
                }
            })
        })
    })
}

readDir('./')
