<template>
    <div class="indexPage-com">
        <!-- banner -->
        <Banner class="mt30 bannerPC"/>
        <banner-m class="showInMobile bannerM"/>
        <div class="container-fulid">
            <nsi-product class="hideInmobile"></nsi-product>
            <div class="container newestPlpr0">
                <!-- 最新动态 -->
                <div class="newest indexNews">
                    <!-- title -->
                    <div class="index-title">
                        <span class="line left-line"></span>
                        <h3 class="text-center mb0_768">行业动态</h3>
                        <h3 class="text-center mt0"><small>What’s New</small></h3>
                        <span class="line right-line"></span>
                    </div>
                    <div class="row pt50 twoNews">
                        <!-- 两则新闻概要 -->
                        <div class="col-md-6 col-xs-6" v-for="(news,index) in recentNews" :key="index" v-if="index<2">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="news-content">
                                        <img :src="news.coverImage+'?x-oss-process=image/resize,m_fixed,h_170,w_270'" alt="" width="100%" height="200px" class="news-img">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="newsBox">
                                        <!-- <h5 class="mt0 multiline"><a href="javascript:;" class="news-title" @click="toDetail(news.id)">{{news.title}}</a></h5> -->
                                        <h5 class="mt0 multiline"><a :href="news.articleUrl" class="news-title" target="_blank">{{news.title}}</a></h5>
                                        <p class="news-articel multiline" :title="news.summary">{{news.summary}}</p>
                                        <span class="news-time">{{news.time}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fourNews">
                      <div class="row mt30">
                          <!-- 四条新闻标题 -->
                          <div class="col-md-6" v-for="(news,index) in recentNews" :key="index" v-if="index>=2&&index<9">
                              <div class="newsInfo">
                                  <div class="row">
                                    <div class="col-md-10">
                                      <!-- <p class="multiline newsInfo-title"><a href="javascript:;" class="newsInfo-detail" @click="toDetail(news.id)">{{"• "+news.title}}</a></p> -->
                                      <p class="multiline newsInfo-title"><a :href="news.articleUrl" class="newsInfo-detail" target="_blank">{{"• "+news.title}}</a></p>
                                    </div>
                                    <div class="col-md-2">
                                      <span class="newsInfo-time">{{news.time}}</span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <!-- 新闻移动端 -->
                    <news-info-m :showFourNews="recentNews" class="showInMobile mt20"></news-info-m>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <router-link :to="{path:'/news'}" class="learnMore">查看更多</router-link>
                      </div>
                    </div>
                </div>
                <!-- 近期活动 -->
                <div class="activities pt50">
                   <!-- title -->
                    <div class="index-title">
                      <span class="line left-line"></span>
                      <h3 class="text-center mb0_768">业务版块</h3>
                      <h3 class="text-center mt0"><small>Business Segments</small></h3>
                      <span class="line right-line"></span>
                    </div>
                    <!-- 活动概要 -->
                    <div class="activitiesBox pt50">
                      <div class="row">
                        <div class="col-md-6">
                            <div class="activities-current animated fadeInLeft" v-for="currentEvent in activitiesCurrent" v-if="currentEvent.content06==currentSerialNum" :key="currentEvent.content06">
                                <h1 class="activitiesTitle"><a :href="currentEvent.content07" target="_blank">{{currentEvent.content02}}</a></h1>
                                <h1 class="activities-zh"><a :href="currentEvent.content07" target="_blank">{{currentEvent.content01}}</a></h1>
                                <p class="activities-info">{{currentEvent.content03}}</p>
                                <p class="activities-info bottomLine">{{currentEvent.content04}}</p>
                                <p class="activities-article multiline">{{currentEvent.textcontent01}}</p>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-offset-1">
                          <div class="othersActivities">
                            <div class="row">
                              <div class="col-md-6 col-xs-6 plpr0" v-for="(activities,index) in activitiesCurrent" @mouseenter="active(index)" :key="index">
                                <a :href="activities.content07" target="_blank">
                                  <div class="othersBox" :class="'othersBox0'+(index+1)" :style="{'background-image':'url('+activities.content05+')'}">
                                    <!-- <div class="othersBox-bg"></div> -->
                                    <div class="othersBox-content">
                                      <p>{{activities.content01}}</p>
                                      <p>{{activities.content03}}</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                    <!-- 近期活动_移动端显示 -->
                    <recent-event class="showInMobile" :eventInfo="activitiesCurrent"></recent-event>
                </div>
            </div>
            <!-- 研究院入口 -->
            <div class="erweimaBox" :class="isShow ? 'show':'hide'">
                <span class="close"  @click="isShowBox">×</span>
                <img src="../images/erweima.png" alt="">
                <p>国际教育研究院</p>
                <p><span class="iconfont icon-weixin"></span>微信扫一扫</p>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "../components/index/banner.vue";
import newsInfoM from "../components/index/newsInfo-M.vue";
import recentEvent from "../components/index/recentEvent-M.vue";
import bannerM from "../components/index/banner-M.vue";
// import wxShareInit from '../assets/js/weChatShare.js'
import wxShareInit from "../assets/js/weChatShare01.js";
import nsiProduct from "../components/index/nsiProduct.vue";
var currentSerialNum = 0;
export default {
  components: {
    Banner,
    newsInfoM,
    recentEvent,
    bannerM,
    nsiProduct
  },
  name: "carrousel",
  data() {
    return {
      // 最新动态
      recentNews: [],
      // 当前活动文章
      currentSerialNum: 0,
      activitiesCurrent: [],
      wxShareInfo: {
        title: "新学说 | 国际学校多边服务平台",
        imgUrl:
          "https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
        href: window.location.href,
        desc:
          "国际学校行业专家打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台"
      },
      isShow: true
    };
  },
  methods: {
    active: function(index) {
      this.currentSerialNum = index;
      // console.log(currentSerialNum)
    },
    toDetail(id) {
      let routeData = this.$router.resolve({
        name: "detailNews",
        params: { id: id }
      });
      window.open(routeData.href, "_blank");
    },
    isShowBox() {
      this.isShow = false;
    }
    // 微信分享
    //     wxInit(){
    //       this.axios({
    //           method:"get",
    //           url:'/Admin_api?whereFrom=WeChatShare&Callback=',
    //           params:{
    //               URL: window.location.href
    //           }
    //       }).then((res)=>{
    //           wxShareInit.wxConfig(res)
    //           wxShareInit.wxReady(this.wxShareInfo)
    //       })
    //   }
  },
  beforeMount() {
    // 微信分享
    if (wxShareInit.isWeixinBrowser()) {
      setTimeout(wxShareInit.wxReady(this.wxShareInfo), 500);
    }
  },
  mounted() {
    // 近期活动
    const eventList = new URLSearchParams();
    eventList.append("type", "官网首页活动");
    this.axios({
      method: "post",
      // url:"http://192.168.0.159:8080/nsi-1.0/manager/official/list.do",
      url: "/manager/official/list.do",
      data: eventList
    }).then(res => {
      // console.log(res)
      this.activitiesCurrent = res.data.data;
    });
    // 最新动态
    const newsList = new URLSearchParams();
    newsList.append("pageNum", 1);
    newsList.append("pageSize", 8);
    this.axios({
      method: "post",
      url: "/article/list.do",
      data: newsList
    }).then(res => {
      const msg = res.data.data.list;
      // console.log(msg)
      this.recentNews = msg;
    });
  }
};
</script>

<style lang="scss">
/* common */
.showInMobile {
  display: none;
}
.hideInmobile {
  @media (max-width: 768px) {
    display: none;
  }
}
@media (max-width: 768px) {
  .showInMobile {
    display: block;
  }
  .activitiesBox {
    display: none;
  }
}
.others {
  padding-left: 0;
  padding-right: 0;
}
.pt50 {
  padding-top: 50px;
  @media (max-width: 768px) {
    padding-top: 15px;
  }
}
.pl0 {
  padding-left: 0;
}
.mt0 {
  margin-top: 0;
}
.mt15 {
  margin-top: 15px;
}
.mt20 {
  margin-top: 20px;
}
.mt30 {
  margin-top: 30px;
}
.mt50 {
  margin-top: 50px;
}
.multiline {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.indexPage-com {
  padding-top: 52px;
  @mixin transitionAnimate {
    -webkit-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  @media (max-width: 768px) {
    padding-top: 0;
    .mb0_768 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 21px;
    }
  }
  // bannerPC&M
  .bannerPC {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .bannerM {
    margin-top: 0;
    padding: 0;
  }
  .learnMore {
    display: inline-block;
    color: #777;
    padding: 4px 18px;
    border-radius: 20px;
    border: 1px solid #eee;
    background-color: #eee;
    margin: 15px 0 25px;
    @include transitionAnimate();
    &:hover {
      background: #dadada;
      text-decoration: none;
      color: #333;
    }
  }
}
.indexNews {
  @media (max-width: 768px) {
    padding-top: 50px !important;
  }
}
/* 最新动态 */
.index-title {
  position: relative;
  top: -15px;
}

.line {
  display: block;
  position: absolute;
  width: 400px;
  height: 1px;
  background-color: #222;
  top: 30px;
}

.left-line {
  left: 50px;
}

.right-line {
  right: 50px;
}
.news-content {
  @media (max-width: 768px) {
    border-radius: 2px;
    overflow: hidden;
    // margin-bottom: 10px;
  }
}
.newsBox {
  @media (max-width: 768px) {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fafafa;
    box-shadow: 0 5px 10px #cacaca;
  }
}
.twoNews,
.fourNews {
  @media (max-width: 768px) {
    display: none;
  }
}
.newestPlpr0 {
  padding-left: 0;
  padding-right: 0;
}

.news-img {
  display: inline-block;
  width: 100%;
  height: 170px;
  background-color: #ccc;
  @media (max-width: 768px) {
    height: 120px;
  }
}
.news-title {
  font-weight: 700;
  font-size: 17px;
  color: #3a899e;
  /* height: 38px;
        max-height: 36px; */
  line-height: 1.5;
}
.news-articel {
  -webkit-line-clamp: 5;
  color: #93999f;
  min-height: 97px;
  max-height: 97px;
  @media (max-width: 768px) {
    -webkit-line-clamp: 3;
    min-height: 58px;
    max-height: 58px;
  }
}
.news-time {
  color: #727475;
}

.newsInfo,
.newsInfo-detail {
  color: #727475;
}
.newsInfo-title {
  -webkit-line-clamp: 1;
}
.newsInfo-detail {
  font-size: 16px;
}

/* 近期活动 */
.activities-current {
  position: absolute;
  width: 100%;
}
.activitiesTitle {
  font-weight: 700;
  position: relative;
  line-height: 1.5;
  @media (max-width: 768px) {
    margin-top: 0;
    font-size: 25px;
  }
}
.activitiesTitle::before {
  display: block;
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100px;
  height: 8px;
  background-color: #20528f;
}
.activities-zh {
  margin-top: 30px;
  font-weight: 600;
  line-height: 1.5;
  font-size: 32px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
}
.activities-zh > a,
.activitiesTitle > a {
  color: #222;
}
.activities-info {
  position: relative;
  color: #727475;
  font-size: 18px;
}
.bottomLine {
  padding-bottom: 15px;
  border-bottom: 1px solid #222;
}
.activities-article {
  -webkit-line-clamp: 6;
  color: #727475;
  min-height: 192px;
  max-height: 192px;
  line-height: 2;
  font-size: 16px;
}
.othersBox {
  height: 250px;
  background: #ccc;
  position: relative;
  transition: all 0.3s ease;
  //   filter: grayscale(50%);
  //   opacity: 0.88;
  background-size: cover;
}
// .othersBox01{
//     background: url("../assets/img/index/othersBox01.jpg") no-repeat;
// }
// .othersBox02{
//     background: url("../assets/img/index/othersBox02.jpg") no-repeat;
// }
// .othersBox03{
//     background: url("../assets/img/index/othersBox03.jpg") no-repeat;
// }
// .othersBox04{
//     background: url("../assets/img/index/othersBox04.jpg") no-repeat;
// }
.othersBox-content {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #fff;
  padding: 5px 10px;
  background-color: transparent;
  transition: all 0.3s;
  p {
    position: relative;
    top: 4px;
  }
}
.othersBox-content > p:last-of-type {
  margin-bottom: 0;
}
.othersBox:hover {
  filter: grayscale(0);
  //   opacity:1;
}
.othersBox:hover .othersBox-content {
  background-color: rgba(0, 0, 0, 0.5);
  /* opacity: .7; */
}
.othersBox01:hover {
  transform: translate3d(-10px, -10px, 0);
}
.othersBox02:hover {
  transform: translate3d(10px, -10px, 0);
}
.othersBox03:hover {
  transform: translate3d(-10px, 10px, 0);
}
.othersBox04:hover {
  transform: translate3d(10px, 10px, 0);
}
@media (max-width: 789px) {
  .line {
    display: none;
  }
  .newestPlpr0 {
    padding-left: 15px;
    padding-right: 15px;
  }
  .activities-current {
    position: relative;
  }
}
.erweimaBox {
  display: block;
  z-index: 999;
  position: fixed;
  right: 70px;
  bottom: 180px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.26);
  width: 177px;
  height: 230px;
  line-height: 15px;
  text-align: center;
  @media (max-width: 768px) {
    display: none !important;
  }
  p {
    &:first-of-type {
      color: #215089;
      font-size: 14px;
      margin-top: 11px;
    }
    &:last-of-type {
      color: rgb(33, 80, 137);
      font-size: 14px;
      position: relative;
      top: -7px;
    }
    span {
      color: #11a211;
      font-size: 18px;
      padding-right: 5px;
    }
  }
  img {
    width: 120px;
    margin-top: 41px;
    margin-left: 12px;
  }
  .close {
    position: relative;
    right: 16px;
    top: 12px;
  }
}
</style>
