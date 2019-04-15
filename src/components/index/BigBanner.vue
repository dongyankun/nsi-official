<template>
  <!-- banner -->
  <div class="swiper-container" id="indexBigBanner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(bannerInfos,item) in bannerInfo" :key="item" v-if="item<4">
                <img :src="bannerInfos.content01" alt="" class="img-responsive" @click="linkTo(bannerInfos.content02)">
            </div>
        </div>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"><span class="iconfont icon-arrow-left"></span></div>
        <div class="swiper-button-next" slot="button-next"><span class="iconfont icon-youjiantou"></span></div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
    data () {
      return {
          bannerInfo:[]
      }
    },
    methods:{
        getBannerInfo(){
            this.axios({
                method: 'get',
                url: '/manager/official/list.do',
                params:{
                    type:"官网首页banner"
                }
            }).then((res)=>{
                const msg=res.data.data
                // console.log(msg)
                this.bannerInfo=msg
                this.$nextTick(()=>{
                    this.swiperInit()
                })
            })
        },
        swiperInit(){
            const self=this
            new Swiper('#indexBigBanner', {
                 notNextTick: true,
                 autoplay: {
                    delay:3000,
                    disableOnInteraction: false,
                },
                loop: true,
                effect : 'fade',
                speed:600,
                grabCursor : true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        },
        linkTo(href){
            window.open(href,"_blank")
        }
    },
    mounted(){
        this.getBannerInfo()
    }
}
</script>

<style lang="scss">
    /* banner */
    #indexBigBanner{
        min-height: 358px;
        background-color: #eee;
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
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            color: #222;
            background: #fff;
            font-size: 50px;
            opacity: .4;
            transition: all .3s;
            &:hover{
              opacity: .8;
            }
            @media (max-width: 768px) {
                width: 40px;
                height: 40px;
                line-height: 35px;
                font-size: 30px;
                opacity: .7;
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
