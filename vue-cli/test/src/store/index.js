import Vue from 'vue'
import Vuex from 'vuex'  // 引入插件

Vue.use(Vuex)  // 安装插件  this.$store

const vuex = {  // 配置对象
  state: {
    // 数据
    user: {
      name: '',
      age: null
    }
  },
  mutations: {
    setName:function(state, name)
    {
         state.user.name = name
    } 
  },
  actions: {

  },
  modules: {
  }
}

const store = new Vuex.Store(vuex)  // 生成状态管理器
export default store 