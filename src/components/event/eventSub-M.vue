<template>
    <div class="eventSub-m-com">
        <div class="container-fluid">
            <div class="swiper-container eventSwiper" id="eventSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center">
                        <!-- <router-link :to="{path:'/event'}"><img width="35" src="../../assets/img/layoutImg/vis2018.png" alt=""><br/>VIS国际学校发展大会</router-link> -->
                        <a href="http://data.xinxueshuo.cn/nsi-class/admin/activity/meeting/vis2018.html" target="_blank"><img width="35" src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/vis2018.png" alt=""><br/>{{$t('layoutNav.eventChild.vis')}}</a>
                    </div>
                    <!-- <div class="swiper-slide text-center">
                        <router-link :to="{path:'/event/lotus'}"><span class="iconfont icon-huiyi fontlogo"></span><br/>{{$t('layoutNav.eventChild.lotus')}}</router-link>
                    </div> -->
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/event/subject'}"><span class="iconfont icon-zhuanti fontlogo"></span><br/>{{$t('layoutNav.eventChild.subject')}}</router-link>
                    </div>
                     <!-- <div class="swiper-slide text-center">
                        <router-link :to="{path:'/event/apply'}"><span class="iconfont icon-baoming fontlogo"></span><br/>{{$t('layoutNav.eventChild.apply')}}</router-link>
                    </div> -->
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
            layoutNav:[this.$t('layoutNav.eventChild.vis'),this.$t('layoutNav.eventChild.lotus'),this.$t('layoutNav.eventChild.subject'),this.$t('layoutNav.eventChild.apply')]
        }
    },
    methods:{
        eventSubInit(){
            var eventSwiper=new Swiper("#eventSwiper",{
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                slidesPerView : 3,
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
        border-bottom: 1px solid #ddd;
        .eventSwiper{
            padding: 10px 0;
            a{
                color: #333;
                &:hover,
                &:link{
                    text-decoration: none;
                }
                span{
                    margin-bottom: 0;
                }
            }
        }
        .fontlogo{
            font-weight: 600;
            font-size: 25px;
        }
    }
</style>
