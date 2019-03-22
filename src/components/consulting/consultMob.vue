<template>
    <div>
        <div class="consulting_mob">
            <div class="eventSub-m-com">
                <div class="container-fluid">
                    <div class="swiper-container eventSwiper consultList" id="researchSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultOne'}">咨询</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultTwo'}">解决方案</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultThree'}">核心能力</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultFour'}">行业洞见</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultFive'}">联系我们</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="consulting_mob">
            <router-view></router-view>
            
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import connectUs from './connectUs.vue'
export default {
   
    components: {
        connectUs
    },
    methods:{
        eventSubInit(){
            var eventSwiper=new Swiper("#researchSwiper",{
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                slidesPerView : 5,
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
    .consulting-com{
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
            display:none;
        }
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
        }
        .content{
            padding-top: 100px;
            @media (max-width: 768px) {
                padding-top: 30px;
            }
        }
    }
    .consultList{
        span{
            display: inline-block;
            padding:10px 0 0px 0;
        }
        .consultListActive{
            color:rgb(255, 208, 75);
        }
    }
</style>
