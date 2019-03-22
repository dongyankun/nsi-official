<template>
    <div class="eventSub-m-com">
        <div class="container-fluid">
            <div class="swiper-container eventSwiper" id="researchSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/periodical'}"><img width="75" class="classLogo pisom" src="../../assets/img/layoutImg/pisom.png" alt=""><br/>PISOM</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <a href="http://class.xinxueshuo.cn" target="'_'"><img width="25" class="classLogo" src="../../assets/img/layoutImg/classLogo.png" alt=""><br/>在线课堂</a>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/periodical'}"><span class="iconfont icon-qikan fontLogo"></span><br/>期刊</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/periodical'}"><span class="iconfont icon-baogao fontLogo"></span><br/>报告</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    methods:{
        eventSubInit(){
            var eventSwiper=new Swiper("#researchSwiper",{
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                slidesPerView : 4,
                slideToClickedSlide: true,
                resistanceRatio:0.4,
            })
        }
    },
    mounted(){
        this.eventSubInit()
    }
}
</script>

<style lang="scss">
    .eventSub-m-com{
        $official-color: #20528f;
        .eventSwiper{
            padding: 10px 0;
            a{
                color: #333;
                &:hover,
                &:link{
                    text-decoration: none;
                }
                span{
                    font-weight: 700;
                    color: $official-color;
                    font-size: 25px !important;
                }
            }
            .classLogo{
                margin-bottom: 2px;
                margin-top: 4px;
            }
            .pisom{
                margin-top: 8px;
                margin-bottom: 5px;
            }
        }
    }
</style>
