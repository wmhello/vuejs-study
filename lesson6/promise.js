// function getName(){
//     return new Promise(function(reslove, reject){
//           setTimeout(function(){
//             let num = 1 + parseInt(Math.random()* 9)
//             if (num < 5) {
//                 let arr = ['张三', '李四', '王五', '赵六', '测试']
//                 reslove(arr[num])
//             } else {
//                 reject('无法获取名字')
//             }
              
//           }, 3000)
//     })
// }



function getName() {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            let num = 0 + parseInt(Math.random() * 4)
            let arr = ['张三', '李四', '王五', '赵六', '测试']
            reslove(arr[num])
        }, 3000)
    })
}

function getAge() {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            let num = 10 + parseInt(Math.random() * 20)
            reslove(num)
        }, 3000)
    })
}

getName().then(function(name){
    console.log(name);
    let tips = '你好 ' + name
    return Promise.resolve(tips)
}).then(function(tips){
    console.log(tips);  
})



// Promise.all(getName,getAge).then(function(name, age){
//     console.log(`${name}的年龄是${age}`);
// })

// getName().then(function (name) {
//     console.log(name);
// }).catch(err => {
//     console.log(err);
// })

// getName().then(function(name){
//    console.log(name);
// }).catch(err=> {
//     console.log(err);
// })
