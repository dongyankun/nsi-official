<template>
    <div class="nav-m-com">
        <div class="container-fluid pr30">
            <div class="swiper-container swiperM" id="swiperM" ref="swiperM">
                <div class="swiper-wrapper newsWrapper" ref="newsWrapper">
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/'}" exact>{{$t('layoutNav.index')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/about'}">{{$t('layoutNav.aboutus')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/news'}" >{{$t('layoutNav.information')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                         <router-link tag="i" :to="{path:'/event'}">{{$t('layoutNav.event')}}</router-link>
                    </div>
                    <!-- <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/lotus'}">{{$t('layoutNav.lotus')}}</router-link>
                    </div> -->
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/research'}">{{$t('layoutNav.research')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/consulting'}">{{$t('layoutNav.consult')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/ges'}">{{$t('layoutNav.ges')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/vip'}">{{$t('layoutNav.vip')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <a href="http://data.xinxueshuo.cn" target="_blank">{{$t('layoutFooter.databaseM')}}</a>
                    </div>
                    <div class="swiper-slide navSlide">
                        <a href="https://data.xinxueshuo.cn/nsi-class/index.html" target="_blank">{{$t('layoutFooter.classOnline')}}</a>
                    </div>
                </div>
            </div>
        </div>
        <div id="more" @click="toTranslate()" ref="more">
            <a href="javascript:;" class="iconfont icon-hao more"></a>
        </div>
        <transition name="fade">
            <div class="morePanel" v-show="openMore">
                <ul>
                    <router-link :to="{path:'/'}" tag="li" exact @click.native="hidePanel(0)">{{$t('layoutNav.index')}}</router-link>
                    <router-link :to="{path:'/about'}" tag="li" @click.native="hidePanel(1)">{{$t('layoutNav.aboutus')}}</router-link>
                    <router-link :to="{path:'/news'}" tag="li"  @click.native="hidePanel(2)">{{$t('layoutNav.information')}}</router-link>
                    <router-link :to="{path:'/event'}" tag="li" @click.native="hidePanel(3)">{{$t('layoutNav.event')}}</router-link>
                    <!-- <router-link :to="{path:'/lotus'}" tag="li" @click.native="hidePanel(4)">{{$t('layoutNav.lotus')}}</router-link> -->
                    <router-link :to="{path:'/research'}" tag="li" @click.native="hidePanel(5)">{{$t('layoutNav.research')}}</router-link>
                    <router-link :to="{path:'/consulting'}" tag="li" @click.native="hidePanel(6)">{{$t('layoutNav.consult')}}</router-link>
                    <router-link :to="{path:'/ges'}" tag="li" @click.native="hidePanel(7)">{{$t('layoutNav.ges')}}</router-link>
                    <router-link :to="{path:'/vip'}" tag="li" @click.native="hidePanel(8)">{{$t('layoutNav.vip')}}</router-link>
                    <li><a style="color:#6e6e6e" href="http://data.xinxueshuo.cn" target="_blank">{{$t('layoutFooter.databaseM')}}</a></li>
                    <li><a style="color:#6e6e6e" href="https://data.xinxueshuo.cn/nsi-class/index.html" target="_blank">{{$t('layoutFooter.classOnline')}}</a></li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            activeNav:0,
            openMore:false,
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.lotus'),this.$t('layoutNav.research'),this.$t('layoutNav.researchChild.magazine'),this.$t('layoutNav.researchChild.report'),this.$t('layoutNav.researchChild.pisom'),this.$t('layoutNav.researchChild.classOnline'),this.$t('layoutNav.consult'),this.$t('layoutNav.ges'),this.$t('layoutNav.vip'),this.$t('layoutFooter.database'),this.$t('layoutFooter.classOnline'),this.$t('layoutFooter.databaseM')],
        }
    },
    methods:{
        navSwiperInit(){
            const _this=this;
            var swiperM=new Swiper('#swiperM', {
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                // width:100,
                slidesPerView : 4,
                slideToClickedSlide: true,
                // centeredSlides: true,
                resistanceRatio:0.7,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                on:{
                    slideChangeTransitionStart:function(swiper){
                        _this.activeNav=this.realIndex
                    },
                    tap:function(){
                        _this.activeNav=this.realIndex
                    },
                },
            })
        },
        toTranslate(){
            this.openMore=!this.openMore
            this.openMore?this.$refs.more.style.transform="rotate(-45deg)":this.$refs.more.style.transform="rotate(0)"
        },
        handleScroll(){
            this.openMore=false;
            this.openMore?this.$refs.more.style.transform="rotate(-45deg)":this.$refs.more.style.transform="rotate(0)"
        },
        hidePanel(i){
            this.openMore=false;
            this.openMore?this.$refs.more.style.transform="rotate(-45deg)":this.$refs.more.style.transform="rotate(0)"
            this.swiper.slideTo(i)
        }
    },
    computed: {
        swiper () {
            return this.$refs.swiperM.swiper
        }
    },
    mounted(){
        this.navSwiperInit()
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss">
    .nav-m-com{
         @mixin transitionAnimate{
          -webkit-transition: all 0.3s ease 0s;
          -ms-transition: all 0.3s ease 0s;
          -o-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
      }
        $official-color: #20528f;
      .pr30{
          padding-right: 30px;
      }
       .fade-enter-active, .fade-leave-active {
          transition: opacity .3s
        }
        .fade-enter, .fade-leave-active {
          opacity: 0
        }
        position: relative;
        // padding-top: 15px;
        // border-top: 3px solid $official-color;
        padding: 10px 0 5px 0;
        border-bottom: 1px solid #ddd;
        .navSlide{
            text-align: center;
            i,a{
                font-style: normal;
                display: inline-block;
                padding-bottom: 5px;
                font-size: 16px;
                margin-top: 5px;
                outline: none !important;
                color: #666;
            }
            .router-link-active{
                font-size: 20px !important;
                font-weight: 600;
                padding-bottom: 0 !important;
                margin-top: 0;
                color: $official-color
            }
        }
        // 更多
        #more{
            position: absolute;
            z-index: 99;
            font-weight: 700;
            right:6px;
            top: 11px;
            color: #666;
            @include transitionAnimate();
            a{
                font-size: 18px;
                color: #666;
                text-decoration: none;
                position: relative;
                @include transitionAnimate();
            }
        }
        // 更多面板
        .morePanel{
            // border-top: 1px solid #ddd;
            background-color: #FFF;
            position: relative;
            z-index: 9999;
            top: 6px;
            -webkit-animation-duration: .3s;
            animation-duration:.3s;
            ul{
                width: 100%;
                padding: 25px 0 0px 31px;
                background-color: rgba($color: #ffffff, $alpha: .9);
                margin: 0;
                display: flex;
                flex-wrap: wrap;
                // align-content:center;
                align-items:flex-start;
                justify-content: flex-start;
                position: fixed;
                box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .2);
                li{
                    list-style: none;
                    width: 80px;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    color: #6e6e6e;
                    border-radius: 2px;
                    margin-bottom: 30px;
                    margin-right: 10px;
                    background-color: #f1f1f1;
                    &.router-link-active{
                        border: 1px solid $official-color;
                        background-color: #FFF;
                        color: $official-color;
                    }
                }
            }
        }
    }
</style>
