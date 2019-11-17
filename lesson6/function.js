// function sum(num1 = 10, num2 = 20, ...arr){
//     let total = num1 + num2
//     for(let value of arr){
//         total += value
//     }
//     return total
// }


// let sum = (num1 = 10, num2 = 20, ...arr) => {
//    let total = num1 + num2
//    for (let value of arr) {
//        total += value
//    }
//    return total
// }
// let num1 = 10, num2 =20
// let total = sum(num1, num2, 30, 40)
// console.log(`${total}`);
// let show = (num1, num2) => {
//     this
// }
var name = '张三'
var obj = {
    name: '测试',
    getName: () => {
        console.log(this.name);   
    }
}
var fun = obj.getName
fun()




// let total = show(40, 50)
// console.log(total);

