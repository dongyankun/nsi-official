<template>
    <div class="eventApply-com">
        <event-banner/>
        <apply-list/>
    </div>
</template>

<script>
import eventBanner from '../../components/event/eventBanner'
import applyList from '../../components/event/applyList'
import wxShareInit from '../../assets/js/weChatShare.js'
export default {
    components:{
        eventBanner,
        applyList,
    },
    data(){
        return{
            wxShareInfo:{
                  title:"新学说 | 参会报名汇总",
                  imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                  href:window.location.href,
                  desc:"最新活动：“有界无边，育在未来”  2018VIS国际学校发展大会，将于11月11日在北京盛大召开。"
              }
        }
    },
    methods:{
         wxInit(){
          this.axios({
                  method:"get",
                  url:'/Admin_api?whereFrom=WeChatShare&Callback=',
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
    .eventApply-com{
    //   padding-top: 52px;
      @media (max-width: 768px) {
          padding-top: 0;
      }
      .showInMobile{
          display: none;
          @media (max-width: 768px) {
              display: block;
          }
      }
    }
</style>
