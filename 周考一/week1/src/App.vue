<template>
  <div id="app">
     <Header />
    <router-view/>
  </div>
</template>
<script>
import Header  from '@/components/Header'
export default {
  components: {
    Header
    //头部
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100v;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    
  }
}
</style>
