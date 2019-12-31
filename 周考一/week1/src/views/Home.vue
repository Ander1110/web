<template>
  <div class="home">
   <div class="left">
    <router-link to="/home/tab1">发现</router-link>
    <router-link to="/home/tab2">排行榜</router-link>
    <router-link to="/home/tab3">企业策划人</router-link>
    <router-link to="/home/tab4">音乐人</router-link>
   </div>
   <div class="right">
      <router-view></router-view>
      <!-- 内容 -->
   </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      list:[],//数据
      
    }
  }
  
}
</script>
<style lang="scss">
.home{
  width: 1000px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  .left{
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    a{
      display: block;
      height: 35px;
      padding-left: 5px;
      text-decoration: none;
      &.router-link-exact-active {
          color: red;
          border-left: 3px solid #f90;
      }
    }
  }
  
}
</style>

