<template>
    <div class="newsbanner-com">
        <div class="container">
            <div class="row" style="position:relative">
                <div class="col-md-8 newsPic">
                    <div class="newsbanner">
                        <div class="swiper-container" id="newsbanner">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(bannerInfos,item) in bannerInfo" :key="item">
                                    <img :src="bannerInfos.coverImage" alt="" class="img-responsive" @click="toDetail(bannerInfos.articleUrl)">
                                </div>
                            </div>
                            <div class="swiper-pagination"  slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev"><span class="iconfont icon-arrow-left"></span></div>
                            <div class="swiper-button-next" slot="button-next"><span class="iconfont icon-youjiantou"></span></div>
                        </div>
                         <div class="slide-bar">
                            <p class="slidebar2"><span class="bigWord">{{$t('news.newsOne')}}</span><br/><span>{{$t('news.newsTwo')}}</span><br/><span>{{$t('news.newsThree')}}</span><br/><span>{{$t('news.newsFour')}}</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="skeleton skeleton-title" id="skeleton" ref="skeleton">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="skeleton skeleton-desc">
                        <p></p>
                        <p></p>
                    </div>
                    <div class="newsInfo animated fadeIn" v-for="(bannerInfos,index) in bannerInfo" :key="index" v-if="index==newsBannerIndex">
                        <h3><a href="javascript:;" class="newsInfo-title" @click="toDetail(bannerInfos.articleUrl)">{{bannerInfos.title}}</a></h3>
                        <p class="newsInfo-desc">{{bannerInfos.summary}}</p>
                        <a href="javascript:;" @click="toDetail(bannerInfos.articleUrl)" class="news-detail">阅读全文</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import { setTimeout } from 'timers';

export default {
    data () {
        return {
        newsBannerIndex:0,
        bannerInfo:[],
        news:[this.$t('news.newsOne'),this.$t('news.newsTwo'),this.$t('news.newsThree'),this.$t('news.newsFour'),this.$t('news.overviewNews'),this.$t('news.policyNews'),this.$t('news.schoolNews'),this.$t('news.tmtNews'),this.$t('news.personNews')]
      }
    },
    methods:{
        toDetail(href){
            // console.log(id)
            // let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            // window.open(routeData.href, '_blank');
            window.open(href, '_blank');
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
                this.bannerInfo=msg
                this.$nextTick(()=>{
                    var skeletonList= document.getElementsByClassName("skeleton")
                    for(var i=0;i<skeletonList.length;i++){
                        skeletonList[i].style.display='none'
                    }
                    this.swiperInit()
                })
            })
        },
        swiperInit(){
            const self=this
            new Swiper('#newsbanner', {
                 notNextTick: true,
                 autoplay: {
                    delay:5000,
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
     $nationDay-Color:#ce1922;
     $nationDay-hoverColor:#c44d53;
     $newsBanner-bg:linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.37) 100%);
    .newsbanner-com{
        .skeleton-title{
            margin-top: 25px;
            p{
                width: 100%;
                height: 27px;
                background-color: #eee;
                &:last-of-type{
                    width: 40%;
                }
            }
        }
        .skeleton-desc{
            margin-top: 30px;
            p{
                width: 100%;
                height: 15px;
                background-color: #eee;
                &:last-of-type{
                    width: 40%;
                }
            }
            @media (max-width: 768px) {
                display: none;
            }
        }
        .newsPic{
            @media (max-width: 768px) {
                padding-left: 0;
                padding-right: 0;
            }
        }
        .newsbanner{
            overflow: hidden;
            border-radius: 2px;
            transition: all .3s;
            box-shadow: 0 12px 24px 0 rgba(7, 17, 27, 0.4);
            min-height: 400px;
            background-color: #eee;
            @media (max-width: 768px) {
                min-height:180px;
                max-height:180px;
                box-shadow: none;
            }
            &:hover .swiper-button-prev,
            &:hover .swiper-button-next{
              opacity: .4;
            }
            .swiper-button-prev,
            .swiper-button-next{
              width:60px !important;
              height: 60px !important;
              line-height: 38px;
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
                  line-height: 25px;
                  font-size: 40px;
                  outline: none;
                  opacity: .8 !important;
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
                z-index: 999;
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
                    span.bigWord{
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
            position: relative;
            z-index: 999;
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
