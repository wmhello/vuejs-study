## Vue-router软件的应用

1. js代码中引入路由  
    1.1 建立组件
    1.2 配置路由表
    1.3 生成路由
    1.4 vue中引入路由

2.  修改页面，增加路由跳转和路由视图
>  router-link  表示路由跳转  利用它来代替A标签
>  router-view  表示路由视图
>  this.$route  表示当前的路由项目
>  this.$router  路由操作

3.  动态路由以及获取路由参数
     动态路由:  /bj1/:id
     增加查询:  /bj1?action=getInfo
     获取路由参数:  $route.params.id
     获取查询：  $route.query.action
       
4.  利用程序进行跳转
    this.$router.push()
    this.$router.replace()

5.  路由项目中的几个关键属性
    redirect  （重定向到指定的url）
    name   （路由名称）
    children  （子路由）
    meta  (根据业务自定义的数据)

6.  导航守卫
   beforeEach
   beforeEnter
   beforeRouteEnter
   beforeRouteUpdate
   beforeRouteLeave
   afterEach



   


