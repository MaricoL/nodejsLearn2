const name = 'zhangsan'
const age = 18

// module.exports = name

// 有多个对象时，需要用对象包裹起来
// module.exports = {
//     name, age
// }

// exports 为 module.exports 的引用
exports.name = name
exports.age = age