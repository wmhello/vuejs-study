import Vue from 'vue'   // script src 
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,    // 集成应用到vue.js项目
  store,
  render: h => h(App),
  el: '#root'
})
