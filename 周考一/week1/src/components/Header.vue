<template>
  <div class="header">
    <div class="header-box">
      <div class="logo">虾米音乐</div>
      <div class="font">发现音乐  我的音乐</div>
      <div class="router-box"> 
        <router-link to="/home/tab1">首页</router-link>
        <router-link to="/about">客户端</router-link>
        <router-link to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.header{
  width: 100vw;
  height: 45px;
  background: rgb(250, 161, 27);
  .header-box{
    width: 1000px;
    height: 45px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    .logo{
      flex:3;
    }
    .font{
      flex:3;
    }
    .router-box{
      flex:4;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a{
        color: #fff;
        text-decoration: none;
        &.router-link-exact-active {
          color: red;
        }
      }
      
    }
  }
}
</style>
