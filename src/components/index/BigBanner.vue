<template>
  <!-- banner -->
  <swiper :options="swiperOption" ref="mySwiper" class="swipercontainer">
      <!-- slides -->
      <swiper-slide class="bg">
          <img src="../../assets/img/index/banner001.jpg" alt="" class="img-responsive">
          <!-- <div class="bgblur bg01"></div> -->
      </swiper-slide>
      <swiper-slide class="bg">
          <img src="../../assets/img/index/banner002.jpg" alt="" class="img-responsive">
          <!-- <div class="bgblur bg02"></div> -->
      </swiper-slide>
      <swiper-slide class="bg">
          <img src="../../assets/img/index/banner003.jpg" alt="" class="img-responsive">
          <!-- <div class="bgblur bg02"></div> -->
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev">‹</div>
      <div class="swiper-button-next" slot="button-next">›</div>
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
            notNextTick: true,
            autoplay: {
                delay:5000,
                disableOnInteraction: false,
            },
            loop: true,
            // spaceBetween: 30,
            speed:500,
            grabCursor : true,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
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

<style lang="scss">
    /* banner */
    .swipercontainer{
        .swiper-button-prev{
            left: 30px;
        }
        .swiper-button-next{
            right: 30px;
        }
        .swiper-button-prev,
        .swiper-button-next{
            width:60px;
            height: 60px;
            line-height: 52px;
            text-align: center;
            border-radius: 50%;
            color: #222;
            background: #fff;
            font-size: 50px;
            opacity: .4;
            transition: all .3s;
            &:hover{
            opacity: .7;
            }
            @media (max-width: 768px) {
                width: 40px;
                height: 40px;
                line-height: 35px;
                font-size: 30px;
            }
        }
        .swiper-pagination-bullet-active{
            background: #FFF;
        }
        /* .swipercontainer{
            position: relative;
        } */
    }
    .bgblur{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-size: 100%;
        top: 0;
        left: 0;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(50px);
        -moz-filter: blur(50px);
        -o-filter: blur(50px);
        -ms-filter: blur(50px);
        filter: blur(50px);
    }
    .bg-content{
        position: relative;
        z-index: 100;
        box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
        padding-left: 0;
        padding-right: 0;
    }
</style>
