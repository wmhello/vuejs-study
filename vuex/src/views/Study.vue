<template>
<div class="container">
   <div class="info">{{baseInfo}}</div>
   <table border="1px">
       <tr>
           <th>时间</th>
           <th>经历</th>
           <th>证明人</th>
       </tr>
       <tr v-for =" (item,index) in study" :key="index">
           <td>{{item.startDate}}--{{item.endDate}}</td>
           <td>{{item.work}}</td>
           <td>{{item.prove}}</td>
       </tr>
   </table>
   <form action="#" @submit.prevent="submit">
    <p>开始时间: <input type="date" v-model="list.startDate" id=""></p>
    <p>结束时间: <input type="date" v-model="list.endDate" id=""></p>
    <p>经历: <input type="datetime" v-model="list.work" id=""></p>
    <p>证明人: <input type="datetime" v-model="list.prove" id=""></p>
     <p><button>增加</button></p>
   </form>
   <p class="toolbar">
       <button @click="prev">上一步</button>
       <button @click="save">保存</button>
    </p> 
</div>
</template>


<script>
import { mapGetters, mapState, mapActions} from "vuex";

export default {
    data() {
        return {
          study: [],
          list:{
              startDate:null,
              endDate: null,
              work: '',
              prove: ''
          }
        }
    },
    computed: {
        ...mapGetters(['baseInfo']),
        ...mapState(['user'])
    },
    methods: {
        ...mapActions(['login']),
        submit(e) {
            this.study.push(this.list)
            this.list = {
              startDate: new Date(),
              endDate: new Date(),
              work: '',
              prove: ''
            }
            e.preventDefault();
        },
        prev() {
            if (this.study.length > 0) {
                if (prompt('已经有数据，是否保存')) {
                   this.save()
                } 
            }
            $router.push('/study')
        },
        save() {
            this.$store.dispatch('save', this.study).then( res => {
                console.log('保存成功');
            }).catch(err=>{
                console.log('保存失败');
            })
        },
        loginSystem() {
           this.login({username, password}).then(res=> {
               this.$router.push('/')
           })
       }
    }
}
</script>

<style lang="css" scoped>
  .toolbar{
      background-color: #333;
      opacity: 0.5;
      height: 40px;
      line-height: 40px;
      text-align: center;
  }
</style>