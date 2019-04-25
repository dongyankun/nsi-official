<template>
    <div class="researchSub-com">
        <div class="container-fluid">
            <div class="swiper-container eventSwiper" id="researchSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center pisomBox">
                        <router-link :to="{path:'/research/pisom'}"><img width="75" class="classLogo pisom" src="../../images/IPA.jpg" alt=""><br/>{{$t('layoutNav.researchChild_Mob.pisom')}}</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <a href="https://www.xinxueshuo.cn/nsi-shop/dist/index.html#/" target="'_'"><img width="25" height="31" class="classLogo" src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/classLogo.png" alt=""><br/>{{$t('layoutNav.researchChild_Mob.classOnline')}}</a>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/periodical'}"><span class="iconfont icon-qikan fontLogo"></span><br/>{{$t('layoutNav.researchChild_Mob.magazine')}}</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/report'}"><span class="iconfont icon-baogao fontLogo"></span><br/>{{$t('layoutNav.researchChild_Mob.report')}}</router-link>
                    </div>
                    <!-- <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/apply'}"><span class="iconfont icon-baoming fontLogo"></span><br/>{{$t('layoutNav.researchChild_Mob.apply')}}</router-link>
                    </div> -->
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/experts'}"><span class="iconfont icon-icon- fontLogo"></span><br/>{{$t('layoutNav.researchChild.experts')}}</router-link>
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
            layoutNav:[this.$t('layoutNav.researchChild_Mob.magazine'),this.$t('layoutNav.researchChild_Mob.report'),this.$t('layoutNav.researchChild_Mob.pisom'),this.$t('layoutNav.researchChild_Mob.classOnline'),this.$t('layoutNav.researchChild_Mob.apply'),this.$t('layoutNav.researchChild.experts')]
        }
    },
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
    .researchSub-com{
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
                    display: inline-block;
                    font-weight: 700;
                    color: #444;
                    font-size: 25px !important;
                    margin-bottom: 5px;
                    margin-right: 0;
                }
            }
            .classLogo{
                margin-bottom: 5px;
                margin-top: 4px;
            }
            .pisomBox{
                width:100px !important;
            }
            .pisom{
                margin-top: 14px;
                margin-bottom: 8px;
            }
        }
        .router-link-active{
            color: #ffd04b !important;
        }
    }
</style>
