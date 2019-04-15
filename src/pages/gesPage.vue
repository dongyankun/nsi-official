<template>
    <div class="ges-com">
        <div class="ges-bg">
            <div class="cover-bg">
               <div class="container">
                   <div class="content">
                       <div class="pc">
                            <h4 class="text-center">{{$t('ges.mission')}}</h4>
                            <h3 class="text-center">{{$t('ges.missionContent')}}</h3>
                       </div>
                       <div class="mol text-left">
                            <h4>{{$t('ges.mission')}}</h4>
                            <h3>{{$t('ges.missionContent01')}}</h3>
                            <h3>{{$t('ges.missionContent02')}}</h3>
                            <h3>{{$t('ges.missionContent03')}}</h3>
                            <h3>{{$t('ges.missionContent04')}}</h3>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        <!-- content -->
        <div class="bgff">
            <div class="container about-nsi">
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <div class="text-center">
                                <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/about/gesLogo.png" alt="" class="team-img img-responsive" width="100">
                            </div>
                            <h3 class="text-center" style="margin-top:40px;">{{$t('ges.aboutNSI')}}</h3>
                            <h3><small>{{$t('ges.aboutNSIContent')}}</small></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bgfa">
            <div class="container team-intro">
                <div class="row">
                    <div class="col-md-6">
                        <div class="team-nsi">
                            <h3 class="text-center">{{$t('ges.team')}}</h3>
                        </div>
                        <p class="team-info">{{$t('ges.teamContent')}}</p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img alt="" src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/about/team-img.jpg" class="team-img img-responsive" width="500">
                    </div>
                </div>
            </div>
        </div>
        <div class="bgff">
            <div class="container nsi-cooperation">
                <div class="row">
                    <div>
                        <h3 class="text-center">{{$t('ges.partner')}}</h3>
                    </div>
                    <div>
                        <h3 class="coo-info"><small>{{$t('ges.partnerContent')}}</small></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="bgfa">
            <div class="container ges">
                <div class="row">
                    <div class="col-md-6">
                        <h3>{{$t('ges.connectUs')}}</h3>
                    </div>
                    <div class="col-md-6">
                        <p><span style="margin-left:35px">{{$t('layoutgesFooter.tel01')}}</span><span style="margin-left:3px;">{{$t('layoutgesFooter.tel02')}}</span></p>
                        <p><span style="margin-left:17px">{{$t('layoutgesFooter.email01')}}</span><span style="margin-left:2px;">{{$t('layoutgesFooter.email02')}}</span></p>
                        <span>{{$t('layoutgesFooter.address01')}}</span>
                        <span>{{$t('layoutgesFooter.address02')}}</span>
                        <div style="margin-left: 73px;margin-top: 10px;">
                            <P>{{$t('layoutgesFooter.address03')}}</P>
                            <P>{{$t('layoutgesFooter.address04')}}</P>
                            <P>{{$t('layoutgesFooter.address05')}}</P>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import wxShareInit from '../assets/js/weChatShare01.js'
export default {
    data(){
        return{
            aboutus:[this.$t('ges.mission'),this.$t('ges.missionContent'),this.$t('ges.missionContent01'),this.$t('ges.missionContent02'),this.$t('ges.missionContent03'),this.$t('ges.missionContent04'),this.$t('ges.aboutNSI'),this.$t('ges.aboutNSIContent'),this.$t('ges.team'),this.$t('ges.teamContent'),this.$t('ges.partner'),this.$t('ges.partnerContent'),this.$t('ges.connectUs'),this.$t('layoutgesFooter.tel01'),this.$t('layoutgesFooter.tel02'),this.$t('layoutgesFooter.email01'),this.$t('layoutgesFooter.email02'),this.$t('layoutgesFooter.phone'),this.$t('layoutgesFooter.address01'),this.$t('layoutgesFooter.address02'),this.$t('layoutgesFooter.address03'),this.$t('layoutgesFooter.address04'),this.$t('layoutgesFooter.address05')],
            wxShareInfo:{
                  title:"新学说 | 国际学校多边服务平台",
                  imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                  href:window.location.href,
                  desc:"国际学校行业专家打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台"
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
    .ges-com{
        // overflow-x: hidden;
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
            h3{
                font-family:'华文新魏';
            }
            p{
               font-family:'华文新魏'; 
            }
            span{
                font-family:'华文新魏'; 
                font-size:16px;
                color:#777;
            }
            @media (max-width: 768px) {
                padding: 30px 0;
                h3{
                    margin-bottom:20px;
                }
            }
        }
        .bgff{
            background-color: #FFF;
            padding: 80px 0;
            h3{
                font-family:'华文新魏';
                small{
                    font-family:'华文新魏';
                }
            }
            
            @media (max-width: 768px) {
                padding: 30px 0; 
            }
        }
        .ges-bg{
            width: 100%;
            height: 550px;
            background-image: url("https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/about/about.jpg");
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
                   h3,h4{
                       font-family: '华文新魏';
                   }
                   .mol{
                       display:none;
                   }
                   @media (max-width: 768px){
                        .mol{
                            display:block;
                            position: relative;
                            left: -20px;
                        }
                        .pc{
                            display:none;
                        }
                   }
                   h4{
                       max-width: 100%;
                       font-size: 50px;
                       font-weight: 700;
                   }
                   h3{
                       margin-top: 10px;
                       font-size: 24px;
                       font-weight: 700;
                    //    line-height: 1.5;
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
        .about-nsi,.team-nsi,.nsi-cooperation,.ges{
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
                margin-left: 15px;
                margin-right: 15px;
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
        .ges{
            max-width: 900px;
            p{
                color: #777;
                font-size: 16px;
            }
        }
    }
</style>
