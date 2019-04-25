<template>
    <div class="researchApply-com">
        <event-banner/>
        <apply-list/>
    </div>
</template>

<script>
import eventBanner from '../../components/research/researchBanner'
import applyList from '../../components/research/researchList'
import wxShareInit from '../../assets/js/weChatShare.js'
export default {
    components:{
        eventBanner,
        applyList,
    },
    data(){
        return{
            wxShareInfo:{
                  title:"新学说 | 课程报名汇总",
                  imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                  href:window.location.href,
                  desc:"报名课程：国际学校市场招生&国际学校战略投资班&国际学校校长研修班"
              }
        }
    },
    methods:{
         wxInit(){
          this.axios({
                  method:"get",
                  url:'/CommonApi/WxShare.do',
                  params:{
                      URL: window.location.href
                  }
              }).then((res)=>{
                  wxShareInit.wxConfig(res)
                  wxShareInit.wxReady(this.wxShareInfo)
              })
        }
    },
    beforeMount(){
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(this.wxInit,500)
        }
    }
}
</script>

<style lang="scss">
    .researchApply-com{
      .showInMobile{
          display: none;
          @media (max-width: 768px) {
              display: block;
          }
      }
    }
</style>
