<template>
  <div class="login">
   用户: <el-input v-model="input" placeholder="请输入内容" style="width:200"></el-input><br>
   密码: <el-input placeholder="请输入密码" v-model="input1" show-password style="width:200"></el-input><br>
   <button @click="EventSubmit()">登录</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      input1: ''
    }
  },
  beforeCreate() {
    if(sessionStorage.getItem("token")){
      this.$router.push({
            path:'/about'
          })
    }
  },
  methods: {
    EventSubmit(){
      this.$http.get('/api/login',{
        params:{
          user:this.input,
          pwd:this.input1
        }
      }).then(res=>{
        if(res.data.code===0){
          alert(res.data.msg);
          sessionStorage.setItem("token",res.data.token);
          this.$router.push({
            path:'/about'
          })
        }else{
          alert(res.data.msg);
        }
      })
    }
  },
}
</script>
<style lang="scss">
.login{
  width: 800px;
  margin: 0 auto;
  .el-input{
    width: 400px;
    height: 40px;
  }
  button{
    width: 100px;
    height: 40px;
    border: none;
    background: rgb(98, 171, 216);
    border-radius: 10px;
    color: #fff;
  }
}
</style>
