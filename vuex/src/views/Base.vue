<template>
    <div class="container">
        <form action="#">
           <table border="1px">
         <tr>
             <td class="title">姓名：</td>
             <td class="content" ><input type="text" v-model = "name"></td>
         </tr>
         <tr>
             <td class="title">性别：</td>
             <td class="content"><input type="radio" v-model="sex" value="男">男 <input type="radio" v-model="sex" value="女">女</td>
         </tr>
         <tr>
             <td class="title">出生日期：</td>
             <td class="content"><input type="date" v-model ="birthday" id=""></td>
         </tr>
         <tr>
             <td class="title">民族：</td>
             <td class="content"><select v-model="mz" id="" >
                 <option value="汉族">汉族</option>
                 <option value="彝族">彝族</option>
                 <option value="白族">白族</option>
                 <option value="壮族">壮族</option>
                 </select></td>
         </tr>
         <tr>
             <td class="title">兴趣爱好：</td>
             <td class="content"><input type="checkbox" v-model="love" value="游泳">游泳
             <input type="checkbox" v-model="love" value="计算机">计算机
             <input type="checkbox" v-model="love" value="旅游">旅游
             <input type="checkbox" v-model="love" value="读书">读书
             </td>
         </tr>
           </table>
        </form>
        <button @click="next">下一步</button>
    </div>
</template>


<script>
import { mapState } from "vuex";
export default {
   data() {
       return {
           name: '',
           sex: '',
           birthday: '',
           mz: '',
           love: ''
       }
   },
   computed: {
       ...mapState(['user'])
   },
   created() {
      this.name = this.user.name
      this.sex = this.user.sex
      this.birthday = this.user.birthday
      this.mz = this.user.mz
      this.love= this.user.love
   },
   methods: {
       next() {
        //   this.$store.commit('setName', this.name)
        //   this.$store.commit('setSex', this.sex)
        //   this.$store.commit('setBirthday', this.birthday)
        //   this.$store.commit('setMz', this.mz)
        //   this.$store.commit('setLove', this.love)
         let name  = this.name
         let love  = this.love
         let mz  = this.mz
         let birthday  = this.birthday
         let sex  = this.sex
          this.$store.commit('setInfo', {name, love,sex, birthday,mz})
          console.log(this.user);
          this.$router.push('/study')  
                  
       }
   }
    
}
</script>

<style lang="css" scoped>
table tr .title{
    text-align: right;
}

table tr .content{
    text-align: left;
}



</style>