<template>   
<div>
    <div v-show="screenWidth<768" class="aboutUsList">
        <div class="text-center">
            <router-link tag="span" active-class="consultListActive" :to="{path:'/about/index'}">{{$t('layoutNav.aboutus')}}</router-link>
        </div>
        <div class="text-center">
            <router-link tag="span" active-class="consultListActive" :to="{path:'/about/joinus'}">{{$t('layoutNav.aboutusChild.joinUs')}}</router-link>
        </div>
        <div class="text-center">
            <router-link tag="span" active-class="consultListActive" :to="{path:'/about/connectus'}">{{$t('layoutNav.aboutusChild.connectUs')}}</router-link>
        </div>
    </div>                  
    <router-view></router-view>
</div>
</template>

<script>
import wxShareInit from '../assets/js/weChatShare01.js'
export default {
    data(){
        return{
            aboutus:[this.$t('aboutus.mission'),this.$t('aboutus.missionContent'),this.$t('aboutus.aboutNSI'),this.$t('aboutus.aboutNSIContent'),this.$t('aboutus.team'),this.$t('aboutus.teamContent'),this.$t('aboutus.partner'),this.$t('aboutus.partnerContent'),this.$t('aboutus.connectUs'),this.$t('layoutFooter.tel'),this.$t('layoutFooter.email'),this.$t('layoutFooter.phone'),this.$t('layoutFooter.address'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.aboutusChild.joinUs'),this.$t('layoutNav.aboutusChild.connectUs')],
            wxShareInfo:{
                  title:"新学说 | 国际学校多边服务平台",
                  imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                  href:window.location.href,
                  desc:"国际学校行业专家打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台"
              },
            screenWidth:10
        }
    },
    beforeMount(){
         // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }
    },
    mounted(){
        this.screenWidth=window.screen.width
        console.log(this.screenWidth)
    }
}
</script>

<style lang="scss">
.aboutUsList{
    background:#FAFAFA;
    padding:10px 15px;
    overflow:hidden;
    .text-center{
        float: left;
        padding:0 10px;
    }
}
    .aboutus-com{
        .img-responsive{
            display: inline-block;
        }
        padding-top: 52px;
        margin-bottom: -50px;
        @media (max-width:768px) {
            padding-top: 0;
        }
        .bgfa{
            background-color: #FAFAFA;
            padding: 80px 0;
            @media (max-width: 768px) {
                padding: 30px 0;
            }
        }
        .bgff{
            background-color: #FFF;
            padding: 80px 0;
            @media (max-width: 768px) {
                padding: 30px 0;
            }
        }
        .about-bg{
            width: 100%;
            height: 550px;
            background-image: url("../images/about.jpg");
            background-size: 100%;
            background-position: center;
            position: relative;
            @media (max-width: 768px) {
                height: 260px;
                background-size: 100% 100%;
            }
            .cover-bg{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                background-color: rgba(32, 82, 143, 0.8);
                .container,.content{
                    height: 100%;
                    display: flex;
                    justify-content: center !important;
                    align-items: center !important;
                    flex-direction: column;
                }
                .content{
                   color: #FFF;
                   letter-spacing: 1px;
                   max-width: 850px;
                   h4{
                       max-width: 100%;
                       font-size: 20px;
                       font-weight: 700;
                   }
                   h3{
                       margin-top: 10px;
                       font-size: 32px;
                       font-weight: 700;
                       line-height: 1.5;
                       @media (max-width: 768px) {
                           font-size: 20px !important;
                       }
                   }
                }
            }
        }
        .about-nsi{
            max-width: 900px;
        }
        .about-nsi,.team-nsi,.nsi-cooperation,.aboutus{
            color: #4A4F57;
            h3{
                font-size: 30px;
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
                @media (max-width: 768px) {
                    font-size: 22px;
                    // margin-bottom: 0;
                    margin-top: 10px;
                }
                small{
                    font-size: 16px;
                    line-height: 2
                }
            }
        }
        .team-intro{
            max-width: 900px;
            .team-nsi{
                margin-bottom: 20px;
            }
            .team-info{
                max-width: 850px;
                margin-left: auto;
                margin-right: auto;
                font-size: 16px;
                color: #777;
                line-height: 2
            }
            .team-img{
                border-radius: 4px;
                background-color: #666
            }
        }
        // 合作伙伴
        .nsi-cooperation{
            max-width: 900px;
            margin-bottom: 50px;
            .coo-info{
                margin-top: 0;
            }
        }
        .coo-logo{
            .col-md-2{
                text-align: center;
                a{
                    display: inline-block;
                    min-height: 150px;
                }
            }
        }
        // 联系我们
        .aboutus{
            max-width: 900px;
            p{
                color: #777;
                font-size: 16px;
            }
        }
    }
    .consultListActive{
            color:rgb(255, 208, 75);
        }
</style>
