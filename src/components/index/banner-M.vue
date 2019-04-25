<template>
  <div class="banner-M-com">
      <div class="swiper-container indexBannerM" id="indexBannerM">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(bannerInfos,item) in bannerList" :key="item" v-if="item<4">
                  <img :src="bannerInfos.content03" alt="" class="img-responsive" @click="toDetail(bannerInfos.content02)">
              </div>
          </div>
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"><span class="iconfont icon-arrow-left"></span></div>
          <div class="swiper-button-next" slot="button-next"><span class="iconfont icon-youjiantou"></span></div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data(){
    return{
      bannerList:[]
    }
  },
  methods:{
      getBannerInfo(){
          this.axios({
              type:"get",
              url:"/manager/official/list.do",
              params:{
                    'type':'官网首页banner'
                  }
          }).then((res)=>{
              this.bannerList=res.data.data
              this.$nextTick(()=>{
                  this.swiperInit()
              })
          })
        },
      swiperInit(){
        const self=this
        new Swiper('#indexBannerM', {
              notNextTick: true,
              autoplay: {
                delay:3000,
                disableOnInteraction: false,
            },
            loop: true,
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
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            on:{
                transitionStart:function(swiper){
                    self.newsBannerIndex=this.realIndex
                    // console.log(self.newsBannerIndex)
                },
            }
        })
    },
    toDetail(url){
        window.open(url,"_blank")
    }
  },
  mounted(){
    this.getBannerInfo()
  }
}
</script>

<style lang="scss">
    .banner-M-com{
        .indexBannerM{
            min-height: 150px;
            max-height:150px;
            background-color: #eee;
        }
        .swiper-button-prev,
        .swiper-button-next{
          width:40px !important;
          height: 40px !important;
          line-height: 31px;
          text-align: center;
          border-radius: 50%;
          color: #222;
          background-image: none !important;
          background: #fff !important;
          font-size: 30px;
          opacity: .7;
          transition: all .3s;
          outline: none;
          &:hover{
            opacity: .9;
          }
    }
    .swiper-pagination-bullet-active{
      background: #FFF !important;
    }
  }
</style>
