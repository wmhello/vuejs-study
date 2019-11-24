<template>
  <div id="app">
    <div id="nav">
      <router-link to="/base">基本信息</router-link> |
      <router-link to="/study">学习经历</router-link>
    </div>
    <div id="warpper">
       <router-view/>
    </div>
    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#warpper{
  width: 1000px;
  margin: 0 auto;
  border: 1px dotted #ccc;
  height: 60vh;
}
</style>
