<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>用户名是{{user.name}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed:{
    ...mapState(['user'])
  }
}
</script>
