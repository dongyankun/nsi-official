<template>
    <div>
        <div class="consulting_mob">
            <div class="eventSub-m-com">
                <div class="container-fluid">
                    <div class="swiper-container eventSwiper consultList" id="researchSwiper" style="padding:10px 0">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultOne'}">{{$t('service.consult')}}</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultTwo'}">{{$t('service.scheme')}}</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultThree'}">{{$t('service.capacity')}}</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultFour'}">{{$t('service.vision')}}</router-link>
                            </div>
                            <div class="swiper-slide text-center">
                                <router-link tag="span" active-class="consultListActive" :to="{path:'/consulting/consultFive'}">{{$t('service.connectUs')}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="consulting_mob">
            <!-- <keep-alive> -->
                <router-view></router-view>
            <!-- </keep-alive> -->
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import connectUs from './connectUs.vue'
export default {
    data(){
        return{
            service:[this.$t('service.consult'),this.$t('service.scheme'),this.$t('service.capacity'),this.$t('service.vision'),this.$t('service.connectUs')]
        }
    },
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
            padding:0;
        }
        .consultListActive{
            color:rgb(255, 208, 75);
        }
    }
</style>
