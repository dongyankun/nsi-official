<template>
    <div class="infoCenter-com">
        <!-- 头条新闻 -->
        <news-banner class="pt60 newsbanner-com"></news-banner>
        <!-- 新闻nav -->
        <ul class="news-nav mt50">
          <li><router-link to=/news/newestArticle>资讯全览</router-link><i class="newsnavLine"></i></li>
          <li><router-link to="/news/policy">政策解读</router-link><i class="newsnavLine"></i></li>
          <li><router-link to="/news/visitSchool">访校观察</router-link><i class="newsnavLine"></i></li>
          <li><router-link to=/news/original>行业分析</router-link><i class="newsnavLine"></i></li>
          <li><router-link to=/news/interview>人物访谈</router-link><i class="newsnavLine"></i></li>
        </ul>
        <news-nav-m class="showInMobile visible-xs visible-sm"></news-nav-m>
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
export default {
    components:{
        NewsBanner,
        backTop,
        newsNavM
    }
}
</script>

<style lang="scss">
    body{
      overflow-x: hidden;
    }
    .infoCenter-com{
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
          transition: all 1.2s ease;
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
                padding-top: 20px;
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
    }
</style>
