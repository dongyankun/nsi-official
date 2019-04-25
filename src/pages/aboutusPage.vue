<template>
    <div class="aboutus-com">
        <div class="about-bg">
            <div class="cover-bg">
               <div class="container">
                   <div class="content text-center">
                       <h4>{{$t('aboutus.mission')}}</h4>
                       <h3>{{$t('aboutus.missionContent')}}</h3>
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
                            <h3>{{$t('aboutus.aboutNSI')}}</h3>
                            <h3><small>{{$t('aboutus.aboutNSIContent')}}</small></h3>
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
                            <h3>{{$t('aboutus.team')}}</h3>
                        </div>
                        <p class="team-info">{{$t('aboutus.teamContent')}}</p>
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
                    <div class="col-md-6">
                        <h3>{{$t('aboutus.partner')}}</h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="coo-info"><small>{{$t('aboutus.partnerContent')}}</small></h3>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row coo-logo">
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.brightscholar.com" target="_blank" title="博实乐教育集团">
                            <img src="https://data.xinxueshuo.cn/upImage/upInstitutionImg/100099/100099-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.schoolis.cn" target="_blank" title="校宝智慧校园">
                            <img src="https://data.xinxueshuo.cn/upImage/upInstitutionImg/100046/100046-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.ourschoolbus.com.cn" target="_blank" title="起点校车">
                            <img src="https://data.xinxueshuo.cn/upImage/upInstitutionImg/100043/100043-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.casio.com.cn/index.html?from=skqs" target="_blank" title="卡西欧（中国）贸易有限公司">
                            <img src="https://data.xinxueshuo.cn/upImage/upInstitutionImg/100181/100181-logo.jpg" alt="" width="180">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="javascript:;" title="北京市君诚国际双语学校">
                            <img src="https://data.xinxueshuo.cn/upImage/upSchoolImg/100742/100742-logo.jpg" alt="" width="100">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.chinahtedu.com" target="_blank" title="北京汉通文化有限责任公司">
                            <img src="https://data.xinxueshuo.cn/upImage/upInstitutionImg/100163/100163-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bgfa">
            <div class="container aboutus">
                <div class="row">
                    <div class="col-md-6">
                        <h3>{{$t('aboutus.connectUs')}}</h3>
                    </div>
                    <div class="col-md-6">
                        <p>{{$t('layoutFooter.tel')}}</p>
                        <p>{{$t('layoutFooter.phone')}}</p>
                        <p>{{$t('layoutFooter.email')}}</p>
                        <p>{{$t('layoutFooter.address')}}</p>
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
            aboutus:[this.$t('aboutus.mission'),this.$t('aboutus.missionContent'),this.$t('aboutus.aboutNSI'),this.$t('aboutus.aboutNSIContent'),this.$t('aboutus.team'),this.$t('aboutus.teamContent'),this.$t('aboutus.partner'),this.$t('aboutus.partnerContent'),this.$t('aboutus.connectUs'),this.$t('layoutFooter.tel'),this.$t('layoutFooter.email'),this.$t('layoutFooter.phone'),this.$t('layoutFooter.address')],
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
</style>
