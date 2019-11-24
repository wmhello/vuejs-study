import Vue from 'vue'
import Vuex from 'vuex'
import axios  from  'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    user:{
      name: '',
      sex: '',
      mz: '',
      birthday: null,
      love: [],
      studyList: []
    }
  },
  getters: {
    baseInfo(state) {
      return `姓名:${state.user.name}  性别:${state.user.sex}  出生日期:${state.user.birthday}`
    }
  },
  mutations: {
    setName: function(state, name) {
      state.user.name = name
    },
    setSex: function(state, sex) {
      state.user.sex = sex
    },
    setMz: function(state, mz) {
      state.user.mz = mz
    },
    setBirthday: function(state, birthday) {
      state.user.birthday = birthday
    },
    setLove: function(state, love) {
      state.user.love = love
    },
    setInfo: function(state, {name, sex, mz, birthday, love}) {
      state.user.name = name
      state.user.sex = sex
      state.user.mz = mz
      state.user.birthday = birthday
      state.user.love = love
    },
    setStudyList: function(state, list) {
        state.user.studyList = list
    },
    setLoginState({state}, isLogin) {
      state.isLogin = isLogin
    }
  },
  actions: {
    save({commit}, studyList) {
       commit('setStudyList', studyList)
      return new Promise((resolve,reject) => {
        axios.post({
          url: '/test',
          data: this.state.user
        }).then((res) => {
             resolve(res)
        }).catch(err=>{
            reject(err)
        })  
      })  
    },
    login({commit}, {username, password}){
      return new Promise((resolve, reject)=>{
        axios.post({url: '/login', data: {username, password}}).then(res=>{
          commit('setLoginState', res.isLogin)
          resolve(res)
        })
      })    
    }
  },
  modules: {

  }
})
