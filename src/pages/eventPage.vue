<template>
    <div class="eventPage-com">
        <event-sub class="showInMobile"/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

import eventSub from '../components/event/eventSub-M'
import wxShareInit from '../assets/js/weChatShare01.js'
export default {
    components:{
        eventSub
    },
    data(){
        return{
            wxShareInfo:{
                  title:"新学说 | 2018VIS国际学校发展大会",
                  imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                  href:window.location.href,
                  desc:"“有界无边，育在未来”  2018VIS国际学校发展大会，将于11月11日在北京盛大召开。"
              }
        }
    },
    beforeMount(){
        // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }
    }
}
</script>

<style lang="scss">
    .eventPage-com{
      padding-top: 52px;
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
