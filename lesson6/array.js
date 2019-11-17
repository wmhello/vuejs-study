// let arr = [200, 20]
// if (arr.includes(100)) {
//    console.log('包含了我们要找的数据');
// } else {
//    console.log('没有包含我们要找的内容');
// }

let arr = [
    {
        name: '张三',
        age: 20
    },
    {
        name: '李四',
        age: 24
    },
    {
        name: '王五',
        age: 25
    }
]
// forEach, map, filter, some,any
// indexOf
function findStudentByName(arr, value){
    let index = arr.findIndex(function (item) {
        // arr[index] = item
        return item.name === value
    })
    return index
}

function getStudentByName(arr, value){
    let student = arr.find(function (item) {
        // arr[index] = item
        return item.name === value
    })
    return student
}

let student = getStudentByName(arr, '未命名')
if (student) {
    console.log('找到了指定名字的学生'); 
    console.log(student);
       
} else {
    console.log('没有找到指定的学生');
}
// let index = findStudentByName(arr, '李四')
// if (index >=0 ) {
//     console.log('找到了指定名字的学生');
//     console.log(arr[index]);
    
// } else {
//     console.log('没有找到指定的学生');
// }
