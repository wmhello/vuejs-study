async function getName() {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            let num = 0 + parseInt(Math.random() * 4)
            let arr = ['张三', '李四', '王五', '赵六', '测试']
            reslove(arr[num])
        }, 3000)
    })
}

async function getAge() {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            let num = 10 + parseInt(Math.random() * 20)
            reslove(num)
        }, 3000)
    })
}

let name = await getName()
let age =  await getAge()
console.log(`${name}的年龄是${age}`);

// getName().then(function (name) {
//     console.log(name);
//     let tips = '你好 ' + name
//     return Promise.resolve(tips)
// }).then(function (tips) {
//     console.log(tips);
// })

