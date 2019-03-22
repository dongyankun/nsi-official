<template>
    <div class="newsbanner-com">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="newsbanner">
                        <div class="swiper-container" id="newsbanner">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(bannerInfos,item) in bannerInfo" :key="item">
                                    <img :src="bannerInfos.coverImage" alt="" class="img-responsive" @click="toDetail(bannerInfos.id)">
                                </div>
                            </div>
                            <div class="swiper-pagination"  slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev">‹</div>
                            <div class="swiper-button-next" slot="button-next">›</div>
                        </div>
                         <div class="slide-bar">
                            <p class="slidebar2"><span>新</span> 闻头条</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="newsInfo animated fadeIn" v-for="(bannerInfos,index) in bannerInfo" :key="index" v-if="index==newsBannerIndex">
                        <h3><a href="javascript:;" class="newsInfo-title" @click="toDetail(bannerInfos.id)">{{bannerInfos.title}}</a></h3>
                        <p class="newsInfo-desc">{{bannerInfos.summary}}</p>
                        <a href="javascript:;" @click="toDetail(bannerInfos.id)" class="news-detail">阅读全文</a>
                    </div>
                </div>
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
        newsBannerIndex:0,
        bannerInfo:[]
      }
    },
    methods:{
        toDetail(id){
            // console.log(id)
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        },
        getBannerInfo(){
            const newsBanner = new URLSearchParams();
            newsBanner.append('pageNum', 1);
            newsBanner.append('pageSize', 5);
            this.axios({
                method: 'post',
                url: '/article/list.do',
                data: newsBanner
            }).then((res)=>{
                const msg=res.data.data.list
                // console.log(msg)
                this.bannerInfo=msg
                this.$nextTick(()=>{
                    this.swiperInit()
                })
            })
        },
        swiperInit(){
            const self=this
            new Swiper('#newsbanner', {
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
        }
    },
    mounted(){
        this.getBannerInfo()
    }
}
</script>

<style lang="scss">
     $official-color: #20528f;
     $newsBanner-bg:linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.37) 100%);
    .newsbanner-com{
        .newsbanner{
            overflow: hidden;
            border-radius: 2px;
            transition: all .3s;
            box-shadow: 0 12px 24px 0 rgba(7, 17, 27, 0.4);
            &:hover .swiper-button-prev,
            &:hover .swiper-button-next{
              opacity: .4;
            }
            .swiper-button-prev,
            .swiper-button-next{
              width:60px !important;
              height: 60px !important;
              line-height: 52px;
              text-align: center;
              border-radius: 50%;
              color: #222;
              background-image: none !important;
              background: #fff !important;
              font-size: 50px;
              opacity: 0;
              transition: all .3s;
              &:hover{
                opacity: .9;
              }
              @media (max-width: 768px) {
                  width: 40px !important;
                  height: 40px !important;
                  line-height: 35px;
                  font-size: 40px;
                  outline: none;
              }
            }
            .swiper-pagination-bullet-active{
              background: #FFF !important;
            }
            .slide-bar{
                position: absolute;
                left: -49px;
                bottom: 0;
                width: 24px;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                flex-direction: column;
                .slidebar1{
                    font-size: 14px;
                    color: #999999;
                    letter-spacing: 0;
                    line-height: 28px;
                    margin-bottom: 30px;
                    text-align: center;
                }
                .slidebar2{
                    font-size: 24px;
                    color: #999999;
                    letter-spacing: 0;
                    line-height: 28px;
                    text-align: center;
                    margin-bottom: 0;
                    span{
                      display: inline-block;
                      color: $official-color;
                      font-size: 45px;
                      margin-bottom: 15px;
                    }
                }
            }
            .bg{
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: $newsBanner-bg;
                left: 0;
                top: 0;
            }
        }
        // 新闻标题
        .newsInfo{
            .newsInfo-title{
                color: #333;
                font-weight: 700;
                font-size: 30px;
                letter-spacing: 2px;
                transition: all .3s;
                &:hover{
                    text-decoration: none;
                    color: #44638a;
                }
                @media (max-width: 768px) {
                    font-size: 22px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    min-height: 48px;
                    max-height: 48px;
                }
            }
            .newsInfo-desc{
                font-size: 14px;
                margin-top: 30px;
                color: #999999;
                line-height: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
                max-height: 168px;
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .news-detail{
                color: #666;
                display: inline-block;
                background: #F0F0F0;
                border-radius: 100px;
                width: 100px;
                height: 40px;
                overflow: hidden;
                line-height: 40px;
                text-align: center;
                -webkit-transition: all 0.3s ease 0s;
                -ms-transition: all 0.3s ease 0s;
                -o-transition: all 0.3s ease 0s;
                transition: all 0.3s ease 0s;
                margin-top: 15px;
                &:hover{
                    text-decoration: none;
                    background:#e4e4e4;
                }
            }
        }
    }
</style>
