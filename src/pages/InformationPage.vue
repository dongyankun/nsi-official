<template>
    <div class="infoCenter-com">
        <!-- <activity /> -->
        <!-- 头条新闻 -->
        <news-banner class="pt60 newsbanner-com"></news-banner>
        <!-- 新闻nav -->
        <ul class="news-nav mt50">
          <!-- <div class="text-center" style="margin-bottom:30px;">
            <a class="visBanner" href="http://data.xinxueshuo.cn/nsi-event/event/vis2018/visM.html" target="_blank">
              <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/VIS-ADBanner.jpg" alt="" style="display:inline-block;max-width:100%;height:auto;">
            </a>
          </div> -->
          <li><router-link to=/news/latest>{{$t('news.overviewNews')}}</router-link><i class="newsnavLine"></i></li>
          <li><router-link to="/news/policy">{{$t('news.policyNews')}}</router-link><i class="newsnavLine"></i></li>
          <li><router-link to="/news/visitSchool">{{$t('news.schoolNews')}}</router-link><i class="newsnavLine"></i></li>
          <li><router-link to=/news/original>{{$t('news.tmtNews')}}</router-link><i class="newsnavLine"></i></li>
          <li><router-link to=/news/interview>{{$t('news.personNews')}}</router-link><i class="newsnavLine"></i></li>
          <li><router-link to=/news/histroy>{{$t('news.oldNews')}}</router-link><i class="newsnavLine"></i></li>
        </ul>
        <news-nav-m class="showInMobile"></news-nav-m>
        <!-- 新闻列表 -->
        <transition name="slide-fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <back-top></back-top>
        
    </div>
</template>

<script>
import NewsBanner from '../components/information/newsbanner'
import backTop from '../components/common/backToTop'
import newsNavM from '../components/information/newsNav-M'
import wxShareInit from '../assets/js/weChatShare01.js'
// import activity from '../components/activities/activity.vue'
export default {
    components:{
        NewsBanner,
        backTop,
        newsNavM,
        // activity
    },
    data(){
      return{
        news:[this.$t('news.overviewNews'),this.$t('news.policyNews'),this.$t('news.schoolNews'),this.$t('news.tmtNews'),this.$t('news.personNews'),this.$t('news.oldNews')],
        wxShareInfo:{
                title:"新学说 | 新闻中心",
                imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                href:window.location.href,
                desc:"国际学校多边服务平台 | 行业动态 ● 深度报道 ● 行业咨询"
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
    body{
      overflow-x: hidden;
    }
    .infoCenter-com{
      @mixin transitionAnimate {
        -webkit-transition: all 0.3s ease 0s;
        -ms-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
    }
      .showInMobile{
        display: none;
        @media (max-width: 768px) {
          display: block
        }
      }
      padding-top: 52px;
      @media (max-width: 768px) {
          padding-top: 0;
      }
      .slide-fade{
          position: absolute;left:0;right: 0;
        }
        .slide-fade-enter-active {
          transition: all .5s ease;
        }
        .slide-fade-leave-active {
          transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to
        {
          left:0;right: 0;
          transform: translateX(50px);
          opacity: 0;
        }
        .pt60{
            padding-top: 60px;
            @media (max-width: 768px) {
                padding-top: 0;
            }
        }
        .mt50{
            margin-top: 50px;
        }
      .news-nav{
        padding-left: 0;
        list-style: none;
        padding-top: 30px;
        padding-bottom: 20px;
        background: #fafafa;
        margin-bottom: 0;
        text-align: center;
        @media (max-width: 769px) {
          margin-top: 10px;
          display: none;
        }
        li{
          display: inline-block;
          position: relative;
          margin: 0 40px;
          padding: 5px;
          .newsnavLine{
            display: block;
            position: absolute;
            bottom: -10px;
            left: 0;
            content: "";
            background: #333;
            width: 100%;
            height: 3px;
            -webkit-transition: all 1s ease 0s;
            -ms-transition: all 1s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
            transform: rotateY(90deg);
          }
          &:hover .newsnavLine
            {
              transform: rotateY(0);
            }
          .router-link-active {
              text-decoration: none;
              font-weight: 600;
              color: #333;
              ~.newsnavLine{
                transform: rotateY(0);
              }
          }
          a{
            display: inline-block;
            font-weight: 500;
            color: #999;
            font-size: 20px;
            -webkit-transition: all 1s ease 0s;
            -ms-transition: all 1s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
            &:hover{
              text-decoration: none;
              font-weight: 600;
              color: #333;
            }
          }
        }
      }
      // visBanner
      .visBanner{
        display: inline-block;
        padding: 5px;
        background-color: #FFF;
        border-radius: 4px;
        box-shadow: 0 2px 10px #ccc;
        @include transitionAnimate();
        &:hover{
          box-shadow: 0 5px 10px #ccc;
        }
      }
    }
</style>
