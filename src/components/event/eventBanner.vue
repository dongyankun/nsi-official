<template>
    <div class="eventBanner-com">
        <!-- banner -->
        <div class="swiper-container" id="eventBanner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(bannerInfos,item) in bannerInfo" :key="item">
                    <img :src="bannerInfos.coverImage" alt="" class="img-responsive">
                </div>
            </div>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"><span class="iconfont icon-arrow-left"></span></div>
            <div class="swiper-button-next" slot="button-next"><span class="iconfont icon-youjiantou"></span></div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
    data () {
      return {
          bannerInfo:[
        //   {
        //       coverImage:require('https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/event/eventBanner01.jpg')
        //   },
          {
              coverImage:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/event/eventBanner03.jpg'
          }]
      }
    },
    methods:{
        getBannerInfo(){
            this.axios({
                method: 'get',
                url: '/manager/official/list.do',
                params:{
                    type:"官网会议活动"
                }
            }).then((res)=>{
                const msg=res.data.data
                // console.log(msg)
                // this.bannerInfo=msg
                this.$nextTick(()=>{
                    this.swiperInit()
                })
            })
        },
        swiperInit(){
            const self=this
            new Swiper('#eventBanner', {
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
        }
    },
    mounted(){
        // this.getBannerInfo()
        this.swiperInit()
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
            line-height: 40px;
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
            @media (max-width: 768px) {
                width: 40px !important;
                height: 40px !important;
                line-height: 25px;
                font-size: 40px;
                outline: none;
                opacity: .8;
            }
        }
        .swiper-button-prev{
            left: 50px;
            @media (max-width: 768px) {
              left: 20px;
            }
        }
        .swiper-button-next{
            right: 50px;
            @media (max-width: 768px) {
              right: 20px;
            }
        }
        .swiper-pagination-bullet-active{
            background: #FFF;
        }
    }
</style>
