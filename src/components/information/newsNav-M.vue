<template>
    <div class="newsnav-m-com">
        <div class="container-fluid">
            <div class="swiper-container swiperM" id="newsSwiperM">
                <div class="swiper-wrapper">
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/newestArticle>资讯全览</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to="/news/policy">政策解读</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to="/news/visitSchool">访校观察</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/original>行业分析</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" to=/news/interview>人物访谈</router-link>
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
    }
</style>
