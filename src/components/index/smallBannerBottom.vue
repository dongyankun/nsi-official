<template>
  <!-- banner -->
  <swiper :options="swiperOption" ref="mySwiper" class="swipercontainer">
      <!-- slides -->
      <swiper-slide class="bg">
          <a href="javascript:;"><img src="../../assets/img/index/small003.jpg" alt="" class="img-responsive"></a>
      </swiper-slide>
      <swiper-slide class="bg">
          <a href="javascript:;"><img src="../../assets/img/index/small004.jpg" alt="" class="img-responsive"></a>
      </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    name: 'carrousel',
    data () {
      return {
        // 轮播
        swiperOption: {
            // notNextTick: true,
            autoplay: {
                delay:3000,
                disableOnInteraction: false,
            },
            loop: true,
            speed:500,
            effect : 'fade'
        },
      }
    },
    computed:{
      swiper(){
        // var swiper01=this.$refs.mySwiper.swiper;
        // return swiper01
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted(){
    //    console.log("每次切换都会触发我");
    //    this.swiper.slideTo(0,1000, false);
    }
}
</script>

<style>

</style>
