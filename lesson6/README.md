#  ES6入门

##  变量和常量的定义  

1.  利用let来定义变量  
>  先定义，才能使用；let定义的变量作用域是块级作用域，只在定义它的代码块内起作用； 不能重复声明，但可以重复定义

2.  利用const来定义常量
>  const定义常量，不能再次改变; const声明常量的时候就必须赋值。

##  解构赋值
1. 数组的解构赋值
>  [变量1, 变量2 = 100] = [100, 200]
>  [变量1， ...变量2] = [100, 99, 60]     // 剩余值

2. 对象的解构赋值
>  {a:a, b:b} = {a:5, b: 6}  => {a, b} = {a:5, b:6}
>  默认值  {a, b, c=100} = {a:5, b: 6}

##  字符的应用
1.  includes 
>  判断字符内部是否包含指定的内容  indexOf

2.  字符模板
>  快速的输出内容， 字符串与变量连接   利用``符号来指定字符模板
>  使用字符模板的时候，变量必须使用${num}, 在{}内可以利用函数或者是简单的运算符来进行计算。

##  数组  
1.  常用的处理函数
>  find、 findIndex、includes
>  includes的参数是基本值
>  find和findIndex的参数是函数，一般用于引用变量的处理（对象、数组等）

##  函数
1.  函数的默认值和剩余参数
    sum(num1 = 10, num2 = 30)  形参可以设置默认值
    sum(num1 = 10, num2 = 30, ...arr) ...arr是剩余参数，为数组格式

2.  箭头函数
    =>  === function
    利用箭头函数，可以精简函数的书写，其中参数只有一个参数，则我们可以省略小括号，如果没有或者有两个及其以上的参数，则必须有小括号
    ()=>{

    }  
    大括号内是函数体，如果函数内部只有一行返回内容，则我们可以省略掉大括号和return关键字，直接写表达式

## 模块
1. es6原生支持了模块化编程，一个文件就是一个模块
   import    =>  导入内容
   export    =>  导出内容


## Promise
>  用于回调函数的书写，最主要是用于和API的交互 axios

~~~
$.ajax({
    url: '/students',
    method: 'get',
    success: funciton(res) {
        let id = res.data[0].id
        $.ajax({
            url: '/result/'+ id,
            method: 'get',
            success: function (res) {

            }
        })
    }
})
~~~

>  回调嵌套


## async与await





