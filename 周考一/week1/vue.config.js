const swiperlist = require('./public/mock/index')

module.exports = {
  lintOnSave:false,
  devServer:{
    before:function(app){
      app.get('/api/swiper',(req,res) => {
         res.json(swiperlist)
      })

      const loginData = {
        user:'123',
        pwd:'123'
      } 
      app.get('/api/login',(req,res) => {
        const {user,pwd} = req.query;
        const flag = loginData.user === user && loginData.pwd === pwd;
        if(flag){
          res.json({
            code:0,
            msg:"登录成功",
            token:`bawei_${user}_${Date.now()}`
          })
        }else{
          res.json({
            code:-1,
            msg:"登录失败",
          })
        }
      })
    }
  }
}