<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="欢迎使用vue.js"/> -->
    <input type="text" v-model="userName" placeholder="请输入姓名">
    <button @click="saveName">保存</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from "vuex";
export default {
  name: 'home',
  data(){
    return {
      userName: null
    }
  },
  
  computed:{
    ...mapState(['user'])
  },
  components: {
    HelloWorld
  },
  created() {
     this.userName = this.user.name
  },
  methods: {
    saveName(){
      this.$store.commit('setName', this.userName)
      this.$router.push('/about')
    }
  }
  
}
</script>
