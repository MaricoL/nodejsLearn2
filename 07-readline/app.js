const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('请输入信息：', answer => {
    console.log(`输出信息————${answer}`)
    rl.close()
})