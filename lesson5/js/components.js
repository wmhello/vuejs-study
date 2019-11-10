var F1 = {
    data: function () {
        return {
            tips: '高一（1）班'
        }
    },
    template: "<div>\
    <ul>\
      <li><a href='#/bj1/1?get=info'>1号学生</a></li>\
      <li><a href='#/bj1/2'>2号学生</a></li>\
      <li><a href='#/bj1/3'>3号学生</a></li>\
    </ul>\
    </div>"
}
var F2 = {
    data: function () {
        return {
            tips: '高一（2）班'
        }
    },
    template: "<div>{{tips}}</div>"
}
var F3 = {
    data: function () {
        return {
            tips: '高一（3）班'
        }
    },
    template: "<div>{{tips}}</div>",
    beforeRouteEnter(to, from, next) {
        console.log('组件内的导航守卫');
        
             next()
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        if (confirm('你确定要离开吗??')) {
            next()
        } else {
            
        }
    }
}


var F4 = {
    data: function() {
        return {

        }
    },
    created(){
        console.log(this.$route.params.id);        
        console.log(this.$route.query.action);        
    },
    template: "<div>\
    <h1>学生信息页面</h1>\
    学生{{$route.params.id}}\
    </div>"
}     