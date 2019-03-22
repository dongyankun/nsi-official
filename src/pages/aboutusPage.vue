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
                            <h3>关于&nbsp;新学说</h3>
                            <h3><small>  北京新学说文化传媒有限公司是由国际学校行业专家共同打造的多边媒体平台，以新媒体为载体、以行业研究为核心、以行业服务为平台。自成立以来一直致力于中国国际学校行业研究，对于中国国际学校有着深刻的了解。到目前为止，新学说已在自有媒体上发表了近千篇行业原创文章，十多本深度行业报告，并为多家学校提供了详细的市场、运营、建设方案，受到业内人士和单位的高度认可。</small></h3>
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
                            <h3>团队介绍</h3>
                        </div>
                        <p class="team-info">
                            新学说 团队由众多位独特且富有才华的成员组成，致力于为数所国际学校提供全方位服务。努力将研究成果转化为实际可操作方案，为国际学校提供各种咨询式服务，例如前期建校咨询，课程设计，市场策划。
                        </p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img alt="" src="../assets/img/about/team-img.jpg" class="team-img img-responsive" width="500">
                    </div>
                </div>
            </div>
        </div>
        <div class="bgff">
            <div class="container nsi-cooperation">
                <div class="row">
                    <div class="col-md-6">
                        <h3>合作伙伴</h3>
                    </div>
                    <div class="col-md-6">
                        <h3 class="coo-info"><small>新学说自创办以来，为数百个家喻户晓的品牌提供了深度定制的推广策略，始终专注于高质量的内容传播和创新的宣传服务。</small></h3>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row coo-logo">
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.brightscholar.com" target="_" title="博实乐教育集团">
                            <img src="http://data.xinxueshuo.cn/upImage/upInstitutionImg/100099/100099-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.schoolis.cn" target="_" title="校宝智慧校园">
                            <img src="http://data.xinxueshuo.cn/upImage/upInstitutionImg/100046/100046-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.ourschoolbus.com.cn" target="_" title="起点校车">
                            <img src="http://data.xinxueshuo.cn/upImage/upInstitutionImg/100043/100043-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.casio.com.cn/index.html?from=skqs" target="_" title="卡西欧（中国）贸易有限公司">
                            <img src="http://data.xinxueshuo.cn/upImage/upInstitutionImg/100181/100181-logo.jpg" alt="" width="180">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="javascript:;" title="北京市君诚国际双语学校">
                            <img src="http://data.xinxueshuo.cn/upImage/upSchoolImg/100742/100742-logo.jpg" alt="" width="100">
                        </a>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <a href="http://www.chinahtedu.com" target="_" title="北京汉通文化有限责任公司">
                            <img src="http://data.xinxueshuo.cn/upImage/upInstitutionImg/100163/100163-logo.jpg" alt="" width="120">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bgfa">
            <div class="container aboutus">
                <div class="row">
                    <div class="col-md-6">
                        <h3>联系我们</h3>
                    </div>
                    <div class="col-md-6">
                        <p>联系电话：010-52468286</p>
                        <p>手机：15010927730</p>
                        <p>邮箱：info@xinxueshuo.cn</p>
                        <p>地址：北京市西城区新风街2号天成科技大厦A座1006</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            aboutus:[this.$t('aboutus.mission'),this.$t('aboutus.missionContent')]
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
            background-image: url("../assets/img/about/about.jpg");
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
