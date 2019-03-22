<template>
    <div class="eventBanner-com">
        <!-- banner -->
        <!-- <div class="container"> -->
            <swiper :options="swiperOption" ref="mySwiper" class="swipercontainer">
                <!-- slides -->
                <swiper-slide class="bg">
                    <img src="../../assets/img/event/eventBanner03.jpg" alt="" class="img-responsive">
                </swiper-slide>
                <swiper-slide class="bg">
                    <img src="../../assets/img/event/eventBanner02.jpg" alt="" class="img-responsive">
                </swiper-slide>
                <swiper-slide class="bg">
                    <img src="../../assets/img/event/eventBanner01.jpg" alt="" class="img-responsive">
                </swiper-slide>
                <swiper-slide class="bg">
                    <img src="../../assets/img/event/eventBanner04.jpg" alt="" class="img-responsive">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev">‹</div>
                <div class="swiper-button-next" slot="button-next">›</div>
            </swiper>
        <!-- </div> -->
    </div>
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
            speed:1000,
            loop: true,
            // spaceBetween: 30,
            grabCursor : true,
            effect: 'coverflow',
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
    .eventBanner-com{
        transition: all .3s;
        &:hover .swiper-button-prev,
        &:hover .swiper-button-next{
            opacity: .4;
        }
        .img-responsive{
            display: inline-block;
            max-width: 100%;
            height: auto;
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
            opacity: 0;
            transition: all .3s;
            &:hover{
            opacity: .9;
            }
        }
        .swiper-button-prev{
            left: 50px;
        }
        .swiper-button-next{
            right: 50px;
        }
        .swiper-pagination-bullet-active{
            background: #FFF;
        }
    }
</style>
