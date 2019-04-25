<template>
    <div class="newsnav-m-com">
        <div class="container-fluid">
            <div class="text-center">
                <!-- <a class="visBanner" href="http://data.xinxueshuo.cn/nsi-event/event/vis2018/visM.html" target="_blank">
                <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/VIS-ADBanner.jpg" alt="" style="display:inline-block;max-width:100%;height:auto;">
                </a> -->
            </div>
            <div class="swiper-container swiperM" id="newsSwiperM">
                <div class="swiper-wrapper">
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/latest>{{$t('news.overviewNews')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to="/news/policy">{{$t('news.policyNews')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to="/news/visitSchool">{{$t('news.schoolNews')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/original>{{$t('news.tmtNews')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/interview>{{$t('news.personNews')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/histroy>{{$t('news.oldNews')}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            activeNav:0,
             news:[this.$t('news.overviewNews'),this.$t('news.policyNews'),this.$t('news.schoolNews'),this.$t('news.tmtNews'),this.$t('news.personNews'),this.$t('news.oldNews')]
        }
    },
    methods:{
        navSwiperInit(){
            const _this=this;
            new Swiper('#newsSwiperM', {
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                // width:95,
                slidesPerView : 4,
                slideToClickedSlide: true,
                // centeredSlides: true,
                resistanceRatio:0.7,
                on:{
                    slideChangeTransitionStart:function(swiper){
                        _this.activeNav=this.realIndex
                        // console.log(_this.activeNav)
                    },
                    tap:function(){
                        _this.activeNav=this.realIndex
                        // console.log(this.realIndex)
                    }
                }
            })
        }
    },
    mounted(){
        this.navSwiperInit()
    }
}
</script>

<style lang="scss">
    .newsnav-m-com{
        $official-color: #20528f;
        // padding-top: 15px;
        // border-top: 3px solid $official-color;
        padding-top: 10px;
        padding-bottom: 0;
        margin-top: 20px;
        border-bottom: 1px solid #ddd;
        // background: #fafafa;
        .navSlide{
            text-align: center;
            i,a{
                font-style: normal;
                display: inline-block;
                padding-bottom: 5px;
                font-size: 16px;
                // margin-top: 5px;
                outline: none;
            }
            .router-link-active{
                color: $official-color;
                border-bottom: 2px solid $official-color;
            }
        }
        // visBanner
        .visBanner{
            box-shadow: 0 3px 10px #ccc;
        }
    }
</style>
