<template>
    <div class="aboutus-com" style="margin-top:0px;">
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
        <div class="myClass">
            <h3>媒体部编辑</h3>
            <div class="row">
                <div class="col-md-6">
                    <dl>
                       <dt class="myList"><span></span>任职资格</dt>
                       <dd>
                           <ul>
                               <li><span></span>策划国际学校行业类选题。</li>
                               <li><span></span>采访和撰写相关报道</li>
                               <li><span></span>运营微信公众号、搜狐号等自媒体平台</li>
                               <li><span></span>根据国际教育行业热点信息,撰写相关研究文章并发表。</li>
                           </ul>
                       </dd>
                    </dl>
                </div>
                <div class="col-md-6">
                    <dl>
                       <dt class="myList"><span></span>岗位要求</dt>
                       <dd>
                           <ul>
                               <li><span></span>沟通能力：能够商讨研究方法，汇报研究成果，探询改进建议；</li>
                               <li><span></span>本科以上学历，专业不限，经济、管理、营销、理工类等专业优先；</li>
                               <li><span></span>优秀的资料查询、数据统计、信息素养，沟通能力强；</li>
                               <li><span></span>对待工作有强烈的责任心，能够承受较高的工作强度和工作压力。</li>
                           </ul>
                       </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="myClass myClass2">
            <h3>咨询部咨询顾问</h3>
            <div class="row">
                <div class="col-md-6">
                    <dl>
                       <dt class="myList"><span></span>任职资格</dt>
                       <dd>
                           <ul>
                               <li><span></span>协助完成公司业务相关的资料查询、数据统计、文案编写工作；</li>
                               <li><span></span>针对国际教育行业开展桌面研究及实地研究，挖掘所需信息；</li>
                               <li><span></span>负责制定项目，充分理解客户需求，与同事协作完成研究报告；</li>
                               <li><span></span>参与项目开发及完善工作进一步工作内容：</li>
                               <li><span></span>了解宏观国际教育行业发展趋势，策划研究课题方向；</li>
                           </ul>
                       </dd>
                    </dl>
                </div>
                <div class="col-md-6">
                    <dl>
                       <dt class="myList"><span></span>岗位要求</dt>
                       <dd>
                           <ul>
                               <li><span></span>英文流利，可完成英文采访和报道；</li>
                               <li><span></span>有媒体编辑经验，有出色的选题策划能力；</li>
                               <li><span></span>文笔出众，执行能力强，有良好的团队协作意识；</li>
                               <li><span></span>本科以上学历，英文专业优先。</li>
                               <li><span></span>根据国际教育行业热点信息,撰写相关研究文章并发表。</li>
                           </ul>
                       </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="footerInfo"><el-button style="background:#2c6daf;color:#fff;" type="primary" round plain>简历请投递至：info@xinxueshuo.cn</el-button></div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
.row{
  margin: 0;
}
    .aboutus-com{
        background-color: #FAFAFA;
        .goToConnectUs{
            float: right;
        }
        .img-responsive{
            display: inline-block;
        }
        padding-top: 52px;
        margin-bottom: -20px;
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
            background-image: url("../../images/about.jpg");
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
    .footerInfo{
       color:#999;
       text-align:center; 
       margin:20px 0 0 0;
      padding-bottom:20px;
    }
    .myClass{
        max-width: 1000px;
        margin:0 auto;
    
        .myList{
            font-size:16px;
        }
        dt{
            
            padding:0 5px;
            margin:10px 0;
            line-height:20px;
            span{
                display: inline-block;
                width: 2px;
                height: 16px;
                margin: -2px 4px;
                background: #F00;
            }
        }
        dd{
            ul{
                padding-left:20px;
            }
            ul li{
                font-size:14px;
                line-height:35px;
                span{
                    display: inline-block;
                    border-radius:50%;
                    width: 6px;
                    height: 6px;
                    background:#2c6daf;
                    margin:0 5px 2px 10px;
                }
            }
        }
        h3{
            text-align:center;
            margin:30px 0;
        }
        ul,li{
            list-style:none;
        }
    }
    @media (max-width: 768px) {
        .myClass{
            padding:40px 10px 0 10px;
        }
      }
</style>
