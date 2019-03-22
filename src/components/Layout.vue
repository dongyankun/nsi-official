<template>
    <div class="layout-com">
        <div class="header">
            <!-- logo -->
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 noPl15">
                            <div class="logoContainer">
                                <a href="javascript:;"><img src="../assets/img/layoutImg/logo.png" alt="" width="220" height="45" class="logo"></a>
                                <div class="selectLang">
                                    <!-- <a href="javascript:;"><img src="../assets/img/layoutImg/zh.png" alt="" width="30"></a> -->
                                    <!-- <a href="javascript:;" v-for="(logo,index) in logos" v-if="logo.switchFlag==true"><img :src="logo.logoImg" alt="" width="30">
                                        &nbsp;{{logo.country}}
                                    </a> -->
                                    <el-dropdown @command="handleCommand" placement="top" trigger="click">
                                        <span class="el-dropdown-link">
                                            <!-- <img v-for="(logo,index) in logos" :key="index" :src="logo.logoImg" alt="" width="30">&nbsp;{{logo.country}}<i class="el-icon-arrow-down el-icon--right"></i> -->
                                            <img class="activelogo" :src="logoActive" alt="" width="30">&nbsp;{{countryActive}}<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item v-for="(logo,index) in logos" :key="index" :command="logo">
                                                <img :src="logo.logoImg" alt="" width="30">&nbsp;{{logo.country}}
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- nav -->

            <!-- PC端导航 -->
            <div class="nav-bg searchBar isFixed navPC" id="searchBar">
                <div class="container plpr0 navContainer ">
                    <div class="row">
                        <div class="col-md-12 plpr0">
                            <nav class="navbar navbar-default">
                                <div class="container-fluid">
                                    <!-- Brand and toggle get grouped for better mobile display -->
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>

                                    <!-- Collect the nav links, forms, and other content for toggling -->
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul class="nav navbar-nav navbar-center">
                                            <li><router-link :to="{path:'/'}">{{$t('layoutNav.index')}}</router-link><span class="sr-only">(current)</span></li>
                                            <li class="dropdown">
                                                <router-link :to="{path:'/about'}">{{$t('layoutNav.aboutus')}}</router-link>
                                            </li>
                                            <li><router-link :to="{path:'/news'}">{{$t('layoutNav.information')}}</router-link></li>
                                            <li class="hasSubmenu">
                                                <!-- <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link> -->
                                                <el-dropdown placement="top">
                                                    <span class="el-dropdown-link">
                                                        <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <a href="javascript:;" target="_"><img src="../assets/img/layoutImg/vis2018.png" width="35" alt="">&nbsp;VIS国际学校发展大会</a>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <a href="javascript:;" target="_">专题研讨会</a>
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                            <!-- <li class="dropdown">
                                                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.louts')}}<span class="caret"></span></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html" target="_">广州新荷学校</a></li>
                                                    <li><a href="https://jinshuju.net/f/L4Iz9D" target="_">上海新荷学校（9月）</a></li>
                                                    <li><a href="https://jinshuju.net/f/L4Iz9D" target="_">北京新荷学校（10月）</a></li>
                                                </ul>
                                            </li> -->
                                            <li class="hasSubmenu">
                                                <!-- <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link> -->
                                                <el-dropdown placement="top">
                                                    <span class="el-dropdown-link">
                                                        <!-- <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.louts')}}<span class="caret"></span></router-link> -->
                                                        <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html" target="_">{{$t('layoutNav.lotus')}}<span class="caret"></span></router-link></a>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html" target="_">广州新荷学校</a>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <a href="https://jinshuju.net/f/L4Iz9D" target="_">上海新荷学校（9月）</a>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <a href="https://jinshuju.net/f/L4Iz9D" target="_">北京新荷学校（10月）</a>
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                            <!-- <li class="dropdown">
                                                <router-link :to="{path:'/research'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.research')}}<span class="caret"></span></router-link>
                                                <ul class="dropdown-menu">
                                                    <li><router-link :to="{path:'/research/periodical'}">{{$t('layoutNav.researchChild.magazine')}}</router-link></li>
                                                    <li><a href="#">{{$t('layoutNav.researchChild.pisom')}}</a></li>
                                                    <li><a href="http://class.xinxueshuo.cn" target="_">{{$t('layoutNav.researchChild.classOnline')}}</a></li>
                                                </ul>
                                            </li> -->
                                            <li class="hasSubmenu">
                                                <!-- <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link> -->
                                                <el-dropdown placement="top">
                                                    <span class="el-dropdown-link">
                                                        <router-link :to="{path:'/research'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.research')}}<span class="caret"></span></router-link>
                                                    </span>
                                                    <el-dropdown-menu slot="dropdown">
                                                        <el-dropdown-item>
                                                            <a href="#">{{$t('layoutNav.researchChild.pisom')}}</a>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <a href="http://class.xinxueshuo.cn" target="_"><img src="../assets/img/layoutImg/classLogo.png" width="20" alt="">&nbsp;{{$t('layoutNav.researchChild.classOnline')}}</a>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/research/periodical'}"><span class="iconfont icon-qikan fontLogo"></span>&nbsp;{{$t('layoutNav.researchChild.magazine')}}</router-link>
                                                        </el-dropdown-item>
                                                        <el-dropdown-item>
                                                            <router-link :to="{path:'/research/periodical'}"><span class="iconfont icon-baogao fontLogo"></span>&nbsp;{{$t('layoutNav.researchChild.report')}}</router-link>
                                                        </el-dropdown-item>
                                                    </el-dropdown-menu>
                                                </el-dropdown>
                                            </li>
                                            <li><router-link :to="{path:'/consulting'}">{{$t('layoutNav.consult')}}</router-link></li>
                                        </ul>
                                    </div><!-- /.navbar-collapse -->
                                </div><!-- /.container-fluid -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 移动端导航 -->
            <nav-m class="showInMobile"></nav-m>
        </div>
        <div class="content">
            <!-- <keep-alive> -->
              <!-- <transition name="slide-fade"> -->
                <router-view></router-view>
              <!-- </transition> -->
            <!-- </keep-alive> -->
        </div>
        <div class="footer mt50">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h3 class="contact">联系我们&nbsp;<span>CONTACT</span></h3>
                <ul class="contact-info">
                  <li>{{$t('layoutFooter.tel')}}</li>
                  <li>{{$t('layoutFooter.email')}}</li>
                  <li>{{$t('layoutFooter.phone')}}</li>
                  <li>{{$t('layoutFooter.address')}}</li>
                </ul>
              </div>
              <div class="col-md-8">
                  <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="blogroll">友情链接</h4>
                                    <div class="shareHref">
                                        <a href="http://data.xinxueshuo.cn" target="_">四库全书</a>
                                        <a href="http://class.xinxueshuo.cn" target="_">在线课堂</a>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="logoShare">
                                        <!-- 微博 -->
                                         <a href="https://weibo.com/u/5786464903?refer_flag=1001030101_&is_hot=1" target="_">
                                            <img src="../assets/img/layoutImg/shareIcon/weibo.png" alt="" width="35">
                                        </a>
                                        <!-- 知乎 -->
                                        <a href="https://www.zhihu.com/org/xin-xue-shuo-chuan-mei-74/activities" target="_">
                                            <img src="../assets/img/layoutImg/shareIcon/zhihu.png" alt="" width="35">
                                        </a>
                                        <!-- 搜狐 -->
                                        <a href="http://mp.sohu.com/profile?xpt=cHBhZzc3MzAzZjExYTE3ZUBzb2h1LmNvbQ==&_f=index_pagemp_2" target="_">
                                            <img src="../assets/img/layoutImg/shareIcon/souhu.png" alt="" width="35">
                                        </a>
                                        <!-- 头条 -->
                                        <a href="https://www.toutiao.com/c/user/6030021946/#mid=6033071476" target="_">
                                            <img src="../assets/img/layoutImg/shareIcon/toutiao.png" alt="" width="35">
                                        </a>
                                        <!-- link -->
                                        <a href="https://www.linkedin.com/in/newschool-insight-b96319139" target="_">
                                            <img src="../assets/img/layoutImg/shareIcon/linked.png" alt="" width="35">
                                        </a>
                                        <!-- 推特 -->
                                        <a href="https://mobile.twitter.com/nsi_media;" target="_">
                                            <img src="../assets/img/layoutImg/shareIcon/twitter.png" alt="" width="35">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="col-md-2 col-xs-2 col-md-offset-1 text-center noPr15">
                            <div class="wechatBox">
                                <h6 class="aboutUs">{{this.$t('layoutFooter.weChat')}}</h6>
                                <img src="../assets/img/layoutImg/wechat_QR.png" alt="" width="110" height="110">
                            </div>
                        </div>
                        <div class="col-md-2 col-xs-2 col-xs-offset-1 text-center noPr15">
                            <div class="wechatBox weiboBox">
                                <h6 class="aboutUs">{{this.$t('layoutFooter.weibo')}}</h6>
                                <img src="../assets/img/layoutImg/weidian.png" alt="" width="110" height="110">
                            </div>
                        </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <span class="footer-company">新学说文化传媒有限公司</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="footer-company company-en">NEWSCHOOL INSIGHT MEDIA</span>
              </div>
              <div class="col-md-12 text-center">
                <div class="copyright">
                  <p>Copyright © 2018 xinxueshuo.cn All Rights Reserved 京ICP备 16031987号-1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import navM from '../components/common/nav-M'
export default {
    components:{
        navM
    },
    data(){
        return{
            searchBarFixed:false,
            switchFlag:true,
            logoActive:require("../assets/img/layoutImg/zh.png"),
            countryActive:"中文",
            logos:[{
                lang:"zh",
                logoImg:require("../assets/img/layoutImg/zh.png"),
                country:"中文",
                switchFlag:true
            },{
                lang:"en",
                logoImg:require("../assets/img/layoutImg/en.png"),
                country:"English",
                switchFlag:false
            }],
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.lotus'),this.$t('layoutNav.research'),this.$t('layoutNav.researchChild.magazine'),this.$t('layoutNav.researchChild.report'),this.$t('layoutNav.researchChild.pisom'),this.$t('layoutNav.researchChild.classOnline'),,this.$t('layoutNav.consult')],
            layoutFooter:[this.$t('layoutFooter.tel'),this.$t('layoutFooter.email'),this.$t('layoutFooter.phone'),this.$t('layoutFooter.address'),this.$t('layoutFooter.weChat'),this.$t('layoutFooter.weibo')]
        }
    },
   mounted(){
        window.addEventListener('scroll', this.handleScroll)
   },
   methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var searchTop = document.querySelector('#searchBar').offsetTop
          if(scrollTop>0){
            searchTop = 85 - Number(scrollTop);
            if(searchTop<=0){
              document.querySelector('#searchBar').style.opacity="0.9"
              document.querySelector('#searchBar').style.top ='0px';
            }else{
              document.querySelector('#searchBar').style.top = searchTop+'px';
            }
          }else{
            document.querySelector('#searchBar').style.opacity="1"
            document.querySelector('#searchBar').style.top = '85px';
          }
      },
      handleCommand(command) {
        switch(command.lang){
            case "zh":
                this.logoActive=this.logos[0].logoImg
                this.countryActive=this.logos[0].country
                break;
            case "en":
                this.logoActive=this.logos[1].logoImg
                this.countryActive=this.logos[1].country
                break;
        }
        this.$i18n.locale =command.lang
        // console.log(command)
      },
   }
}
</script>

<style lang="scss">
    $official-color: #20528f;
    $official-hoverColor:#0e3361;
    $official-footerColor:#2c6daf;
    $official-footerFontColor:#699bda;
    $official-otherColor:#8fb8fb;
    .fontLogo{
        font-size: 20px !important;
    }
    .layout-com{
      .slide-fade-enter-active {
        transition: all .5s ease;
      }
      .slide-fade-leave-active {
        transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter, .slide-fade-leave-to
      {
        opacity: 0;
      }
    }
    .mt50{
        margin-top: 50px;
    }
    .noPr15{
        padding-right: 0;
    }
    .searchBar{
        transition: opacity .3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .28);
    }
    .plpr0{
        padding-left: 0;
        padding-right: 0;
    }
    .logoContainer{
        padding: 20px 0;
        @media (max-width: 768px) {
            padding: 8px 0 0;
        }
    }

    .nav-bg{
        background-color: $official-color;
        z-index: 999;
        position: relative;
        width: 100%;
    }
    .navbar{
        margin-bottom: 0;
        background-color: $official-color;
        border-color: $official-color;
    }
    .navbar-default .navbar-nav li a{
        color: #fff;
        transition: all .2s;
        font-size: 16px;
        // font-weight: 600;
        letter-spacing: 1px;
        height: 52px;
        line-height: 26px;
    }
    .navbar-default .navbar-nav .active a, .navbar-default .navbar-nav .active a:focus, .navbar-default .navbar-nav .active a:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-nav li a:focus, .navbar-default .navbar-nav li a:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-nav .open a, .navbar-default .navbar-nav .open a:focus, .navbar-default .navbar-nav .open a:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-toggle {
        border-color: #fff;
        right: 15px;
    }
    .navbar-default .navbar-toggle .icon-bar {
        background-color: #fff;
    }

    .navbar-default .navbar-toggle:hover {
        background-color: #fff;
    }
    .navbar-default .navbar-toggle:focus{
         background-color: $official-hoverColor;
    }

    .navbar-nav {
        margin: 0 -15px;
        position: relative;
    }
    .hasSubmenu a{
        display: inline-block;
        padding: 15px;
    }
    .hasSubmenu a:hover,
    .hasSubmenu a:link{
        text-decoration: none !important;
    }
    .el-dropdown-menu a{
        display: block;
        text-decoration: none !important;
        color: #004f94;
        font-weight: 600;
    }
    /* 选择语言*/
    .selectLang{
        position: absolute;
        right: 15px;
        top: 25px;
        @media (max-width:768px) {
            top: 10px;
        }
        a{
            color: #777;
        }
        .activelogo{
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
            border-radius: 50%;
            position: relative;
            top: -1px;
        }
    }
    .el-dropdown-menu{
        z-index: 10000 !important;
    }
    /* 判断吸顶 */

    .isFixed{
        position:fixed;
        top:85px;
        z-index:9999;
        width: 100%;
        // opacity: .9;
    }

    /* footer */
    .footer{
      padding: 20px 0;
      background-color: $official-footerColor;
    }
    .footer{
      color: #FFF;
    }
    .footer>.container{
        padding-left: 0;
        padding-left: 0;
    }
    .footer .contact{
      // font-weight: 700;
      color: #FFF;
      font-size: 18px;
      font-family: -webkit-pictograph,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .footer .contact>span{
      font-weight: normal;
      font-size: 14px;
      font-family: "微软雅黑",Arial, Helvetica, sans-serif;
      letter-spacing: 1px;
    }
    .contact-info{
      padding-left: 0;
      list-style: none;
    }
    .contact-info>li{
      line-height: 2;
      color: $official-footerFontColor;
      font-family: Arial, Helvetica, sans-serif
    }
    .footer-bottom{
      padding: 20px 0;
      background-color: #2f2f2f;
      @media (max-width:768px) {
          margin-top: 30px;
      }
    }
    .footer-bottom>.container{
        padding-left: 0;
        padding-right:0;
    }
    .footer-company{
      font-size: 20px;
      color: #969696;
      letter-spacing: 1px;
      // margin-right: 30px;
    }
    .company-en{
      font-size: 18px;
    }
    .copyright{
      padding-top: 15px;
      font-size: 13px;
      color: #969696;
      p{
        margin-bottom: 0;
      }
    }
    .aboutUs{
        font-weight: 700;
        margin: 20px 0 10px 0;
        color: $official-otherColor;
    }
   .aboutUs-info>li>a{
        color: $official-footerFontColor;
    }
    .aboutUs-info{
        padding-left: 0;
    }
    .aboutUs-info>li{
        list-style: none;
        line-height:2.3;
    }
    .wechatBox{
        display: inline-block;
        padding-left: 40px;
        h6{
        margin-bottom: 15px;
      }
    }
    .weiboBox{
      padding-left: 90px;
      h6{
        margin-bottom: 15px;
      }
    }
    .blogroll{
      margin-top: 25px;
      margin-bottom: 25px;
      @media (max-width: 768px) {
          margin: 10px 0 10px 0;
      }
    }
    .shareHref{
        margin-bottom: 30px;
        @media (max-width:768px) {
            margin-bottom: 10px;
        }
        a{
            color: #8fb8fb;
            margin-right:25px;
        }
        a:hover{
            text-decoration: none;
            color: #c1dcff;
        }
    }
    .logoShare{
        a{
            display: inline-block;
            color: #FFF;
            background-color: #FFF;
            margin-right:22px ;
            margin-bottom: 13px;
            border-radius: 10px;
            box-shadow: 2px 2px 2px #4a4a4a;
            @media (max-width: 768px) {
                margin-right: 15px;
            }
            i{
                font-size: 25px;
            }
        }
         a:hover{
            text-decoration: none;
            color: #c1dcff;
        }
    }
    @media (max-width: 768px){
    // PC导航隐藏
    .navPC{
        display: none !important;
    }
    .showInMobile{
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
    .noPl15{
      padding-left: 0;
      .logo{
        width: 200px;
        @media (max-width: 768px) {
            height: 35px;
            width: 135px;
        }
      }
    }
    .navbar-default .navbar-nav .open .dropdown-menu>li>a {
          color: #fff
      }

     .nav-bg{
        background-color: $official-color;
        z-index: 999;
        position: fixed;
        width: 100%;
    }
    .navContainer{
        padding-left: 15px;
        padding-right: 1px;
    }
    .content{
        padding-top: 52px;
        @media (max-width:768px) {
            padding-top: 0;
        }
    }
    .footer>.container,
    .footer-bottom>.container{
        padding-left: 15px;
        padding-right:15px;
    }
    .footer{
        display: none;
    }
    .footer-company{
        font-size: 13px;
    }
    .copyright{
        font-size: 12px;
    }
}
</style>
