<template>
    <div class="slideAD-com">
        <div class="swiper-container" id="swiperAd">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(adInfos,item) in ADinfo" :key="item">
                    <a :href="adInfos.clickurl" target="_blank">
                        <img :src="adInfos.imgurl" alt="" class="img-responsive">
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"  slot="pagination"></div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
    data(){
        return{
            ADinfo:{}
        }
    },
    methods:{
        adSwiperInit(){
            new Swiper('#swiperAd',{
                notNextTick: true,
                autoplay: {
                    delay:3000,
                    disableOnInteraction: false,
                },
                loop: true,
                speed:600,
                grabCursor : true,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            })
        }
    },
    mounted() {
        this.axios({
            methods:"get",
            url:"/article/getArticleAd.do",
            params:{
                articleId:1,
                typeName:"文章页右侧广告位"
            }
        }).then((res)=>{
            // console.log(res)
            this.ADinfo=res.data.data
            this.$nextTick(()=>{
                this.adSwiperInit()
            })
        })
    }
}
</script>

<style lang="scss">
    .slideAD-com{
        .swiper-pagination-bullet-active{
            background: #FFF;
        }
    }
</style>
