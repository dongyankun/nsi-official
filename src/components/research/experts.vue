<template>
    <div class="experts-com">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="title">专家智库</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-6" v-for="(experts,index) in expertsList" :key="index" :class="{'pr7':index%2==0,'pl7':index%2!=0}">
                    <div class="expertsBox">
                        <div class="imgBox text-center">
                            <img width="135" height="135" :src='experts.imgUrl' alt="" class="img-responsive">
                        </div>
                        <div class="infoBox">
                            <p class="info-name text-center">{{experts.name}}</p>
                            <p class="job text-center">{{experts.job}}</p>
                            <p class="info-desc" :title="experts.desc" v-html="experts.desc"></p>
                        </div>
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
            expertsList:[
                {
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/越姐.jpg',
                    name:'吴越',
                    job:'新学说创始人',
                    desc:'汉通教育 创始人兼 CEO<br/>腾讯教育专栏作家',
                },
                // {
                //     imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/静姐.jpg',
                //     name:'程静',
                //     job:'新学说联合创始人兼运营总监',
                //     desc:''
                // },
                {
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/安盈.jpg',
                    name:'安瀛',
                    job:'新学说教育研究院首席研究员',
                    desc:'原北京四中国际校区创校校长'
                },
                {
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/杨总.jpg',
                    name:'杨飞',
                    job:'原狄邦教育集团副总裁',
                    desc:'紫光学大学校事业部总经理'
                },
                {
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/李周.jpg',
                    name:'李周',
                    job:'良裁教育创办人',
                    desc:'人大附中北京经开区实验学校（亦庄）首席教育专家和学生生涯总规划师'
                },
                {
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/吴峥原图.jpg',
                    name:'吴峥',
                    job:'博实乐教育集团市场部副总',
                    desc:'博实乐旗下60余所园校招生总教头<br/>《博实乐市场招生大全》作者<br/>创建博实乐三级招生管理体系。'
                },
                {
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/陈红霞.jpg',
                    name:'陈红霞',
                    job:'某教育集团国际事业部HRBP',
                    desc:'15年国际学校/国际教育机构/集团跨文化HR管理经验，曾在北京某知名全 IB 体系的K12国际学校任人力资源部主任职务4年。'
                },{
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/金赟.jpg',
                    name:'金赟',
                    job:'海归人才子女学校人事行政总监',
                    desc:'从事教育工作18年，其中国际学校HR及行政管理工作15年。曾就职于新加坡伊顿、UWC世界联合学院等多个国际教育机构。'
                },{
                    imgUrl:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/experts/高美华.jpg',
                    name:'高美华',
                    job:'某外籍子女学校人力资源部负责',
                    desc:'15年的从业经验中在世界五百强某外资银行6年以及先后在上海重庆两家知名外籍子女学校任职9年，任人力资源部负责人。'
                },{
                    imgUrl:require('../../images/letures/董圣足.jpg'),
                    name:'董圣足',
                    job:'上海市科教民办教育研究所所长',
                    desc:'中国民办教育协会常务理事、民办教育研究院常务副院长'
                },{
                    imgUrl:require('../../images/letures/徐俭.jpg'),
                    name:'徐俭',
                    job:'上海世外教育集团总裁',
                    desc:'交通大学公共管理硕士，上海世界外国语小学副董事长'
                },{
                    imgUrl:require('../../images/letures/吴华.jpg'),
                    name:'吴华',
                    job:'浙江大学教育学院教授、博士生导师',
                    desc:'中国民办教育协会常务理事,国家民办教育法律与政策设计咨询专家。'
                },{
                    imgUrl:require('../../images/letures/林敏.jpg'),
                    name:'林敏',
                    job:'上海西外外国语学校创办人兼总校长',
                    desc:'上海市督学，复旦大学学士，英国利兹大学博士'
                },{
                    imgUrl:require('../../images/letures/卢慧文.jpg'),
                    name:'卢慧文',
                    job:'上海协和教育集团总校长',
                    desc:'上海市政协常委，上海市民办中小学协会副会长'
                },{
                    imgUrl:require('../../images/letures/吴子健.jpg'),
                    name:'吴子健',
                    job:'上海包玉刚实验学校校长',
                    desc:'上海市民办中小学协会副会长；华东师范大学青少年发展研究中心特聘教授'
                },{
                    imgUrl:require('../../images/letures/李萍.jpg'),
                    name:'李萍',
                    job:'中国常熟世界联合学院副校长',
                    desc:'毕业于厦门大学汉语言文学系，留校任教13年'
                },{
                    imgUrl:require('../../images/letures/毛恩.jpg'),
                    name:'毛恩',
                    job:'中锐教育集团副董事长',
                    desc:'曾任航天局第八设计部团委书记、上海团市委研究室主任、上海第一百货集团公司副总经理'
                },{
                    imgUrl:require('../../images/letures/梁兴安.jpg'),
                    name:'梁兴安',
                    job:'领科教育集团创办人',
                    desc:'中国人民大学本科，研究生，经济学硕士，中欧国际工商管理学院EMBA'
                },{
                    imgUrl:require('../../images/letures/华晓杭.jpg'),
                    name:'华晓杭',
                    job:'苏州工业园区海归人才子女学校校长',
                    desc:'连续创建多所具有创新价值的IB学校'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .experts-com{
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        .pl7{
            @media (max-width: 768px) {
                padding-left: 7px;
            }
        }
        .pr7{
            @media (max-width: 768px) {
                 padding-right: 7px;
            }
        }
        padding-top: 54px;
        padding-bottom: 15px;
        background-color: #f8f8f8;
        .title{
            font-family: PingFangSC-Semibold;
            font-size: 48px;
            color: #c8c8c8;
            letter-spacing: 10px;
            line-height: 48px;
            height: 50px;
            position: relative;
            margin-bottom: 40px;
            @media (max-width: 768px) {
                font-size: 30px;
                margin-bottom: 20px;
            }
        }
        .expertsBox{
            padding: 15px;
            background-color: #fff;
            box-shadow: 0 10px 15px 0 rgba(0,0,0,.02), 0 15px 40px 0 rgba(0,0,0,.02);
            margin-bottom: 30px;
            @include transitionAnimate();
            .imgBox{
                img{
                    border-radius: 2px;
                    display: inline-block !important;
                    min-height: 135px;
                    max-height:135px;
                    background-color: #eee;
                    @media (max-width: 768px) {
                        min-height: auto;
                    }
                }
            }
            .infoBox{
                .info-name{
                    font-size: 16px;
                    line-height: 24px;
                    margin-top: 10px;
                    white-space: nowrap;
                    color: #36639a;
                    font-weight: 700;
                    -webkit-line-clamp: 1;
                    padding: 0 36px;
                    word-wrap: break-word;
                    text-overflow: -o-ellipsis-lastline;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                    overflow: hidden;
                    margin-bottom: 0;
                }
                .job{
                    font-size: 12px;
                    color: #4D555D;
                    height: 24px;
                    line-height: 24px;
                    margin-bottom: 5px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    //display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    min-height: 24px;
                    max-height: 24px;
                    text-align: center;
                }
                .info-desc{
                    // padding:0 15px;
                    line-height: 20px;
                    color: #999;
                    font-size: 12px;
                    min-height: 72px;
                    max-height: 72px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    // display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    line-height: 2;
                    text-align: center;
                    @media (max-width: 768px) {
                        min-height: 44px;
                        max-height: 44px;
                        -webkit-line-clamp: 2;
                    }
                }
            }
            &:hover{
                background-color: #fff;
                box-shadow: 0 10px 15px 0 rgba(0,0,0,.05), 0 15px 40px 0 rgba(0,0,0,.08);
            }
            @media (max-width: 768px) {
                height: 265px;
                margin-bottom: 15px;
            }
        }
        @media (max-width: 768px) {
            padding-top: 0;
        }
    }
</style>
