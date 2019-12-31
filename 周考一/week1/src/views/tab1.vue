<template>
  <div>
    <SwiperBar />
    <!-- 轮播 -->
    <!-- 数据循环 -->
      <div class="home-box" v-for="(item,index) in list" :key="index">
        <h3>{{item.type}}</h3>
        <div class="musie">
          <div class="musie-box"  v-for="(val,index) in item.data" :key="index">
            <img :src="val.img" alt="">
            <p>{{val.title}}</p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import SwiperBar  from '@/components/SwiperBar'
export default {
  data() {
    return {
      list:[]//数据
    }
  },
  components:{
    SwiperBar
    // 轮播
  },
  created() {
    //异步axios
    this.$http.get('/api/swiper').then(res=>{
      this.list = res.data.list.data;
    })
  },
}
</script>
<style lang="scss">
.musie{
    width: 800px; 
    display: flex;
    flex-wrap: wrap;
    .musie-box{
      width: 200px;
      margin: 10px;
    }
  }
</style>
