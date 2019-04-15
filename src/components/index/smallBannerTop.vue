<template>
  <!-- banner -->
  <div class="swiper-container indexBannerTop" id="indexBannerTop">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(bannerInfos,item) in bannerInfo" :key="item" v-if="item>=6&&item<9">
                <img :src="bannerInfos.content01" alt="" class="img-responsive" @click="linkTo(bannerInfos.content02)">
            </div>
        </div>
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
            new Swiper('#indexBannerTop', {
                 notNextTick: true,
                 autoplay: {
                    delay:4000,
                    disableOnInteraction: false,
                },
                loop: true,
                effect : 'fade',
                speed:600,
                grabCursor : true,
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
    .indexBannerTop{
        min-height: 175px;
        background-color: #eee;
    }
</style>
