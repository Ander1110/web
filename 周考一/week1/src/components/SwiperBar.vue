<template>
  <div>
     <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in list" :key="index"><img :src="slide.img" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        autoplay:true,//制动轮播
          pagination: {
            el: '.swiper-pagination'
          }
      },
      list:[]
    }
  },
  //异步axios
  created() {
    this.$http.get('/api/swiper').then(res=>{
      this.list = res.data.swiperList.data;
    })
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
.swiper-container{
  width: 800px;
  height: 400px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
