<template>
    <div class="advanced-com">
       <div v-show="isPcOrMob=='pc'" class="advanced-pc">
          <div>
              <img class="mainPage" src="../../images/advanced.jpg">
          </div> 
          <div class="enroll">
              <p @click="enrollNow">立即报名</p>
          </div>
       </div>

        <div v-show="isPcOrMob=='mob'" class="advanced-mob">
            <div class="banner">
                <h1 class="text-center banTxt">新学说国际学校高级管理研修班</h1>
                <h1 class="text-center banTxt">NSI International Principal Academy</h1>
            </div>
            <div class="container">
                <div class="discrip">
                    <h3 class="text-center discrip">面向国际学校校长及高级管理者，全面讲解国际学校运营关键板块，结合授课与访校，理论讲解与案例分析，使学员对国际学校的理解更加通透，管理更加自如。</h3>
                    <h4 class="text-center discrip">IPA course especially for international school principals and senior managers，covers essencial factors explanation of international school operation and management, combined theory  and  case analysis in lectures and school visiting.</h4>
                </div>
                <div class="row classItem">
                    <div class="col-md-6">
                        <img class="item-img" src="../../images/h.jpg">
                    </div>
                    <div class="col-md-6 disItem">
                        <h4 class="item-title01">新学说国际学校高级管理研修班-海外班</h4>
                        <h4 class="item-title01 titleDis">NSI-BYU International Principal Academy</h4>
                        <p class="item01">12天集中培训，授课结合访校，放宽国际视野</p>
                        <p class="item01">美国杨百翰大学教育学院教授亲授前沿教育理念</p>
                        <p class="item01">参访美国本土学校，与美国校长当面交流运营经验</p>
                        <p class="item01">于犹他州州政府STEM中心学习最新STEM教育方式方法</p>
                        <p class="item01">完成课程并通过测评，由杨百翰大学授权颁发结业证书</p>
                    </div>              
                </div>
                <h2 class="text-center title-main">新学说国际学校高级管理研修班-海外班课程主题概览</h2>
                <div class="row text-center">
                    <div class="col-md-3 content01">
                        <p class="content02">校长的角色定位</p>
                        <p class="">Principal Roles</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">领导力与信任</p>
                        <p class="">Leadership and Trust</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">基于大数据的决策制定</p>
                        <p class="">Data-Driven Decision Making</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">混合式学习</p>
                        <p class="">Blended/Hybrid learning</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">国际环境下的民办教育</p>
                        <p class="">Private Education in International Context</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">学生支持策略</p>
                        <p class="">Strategies for Assisting Students</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">STEM项目教学方法</p>
                        <p class="">Teaching Strategies for STEM</p>
                    </div>
                    <div class="col-md-3 content01">
                        <p class="content02">专业学习社区</p>
                        <p class="">Professional Learning Community</p>
                    </div>
                </div>
                <div class="row classItem">
                    <div class="col-md-6 disItem">
                        <h4 class="item-title02">新学说国际学校高级管理研修班-国内班</h4>
                        <h4 class="item-title02 titleDis">NSI International Principal Academy</h4>
                        <p class="item02">1次密集培训+ 4次线下面授课程</p>
                        <p class="item02">5天密集培训，六大主题精讲，建立运营管理新高度</p>
                        <p class="item02">4次模块课程，四个城市实地访校，深度解读中国市场</p>
                        <p class="item02">从经验与实践出发，结合理论与案例分析，向行内专家学习</p>
                        <p class="item02">与地方学校深入探讨交流，针对性解决运营管理中常见问题</p>
                    </div>
                    <div class="col-md-6">
                        <img class="item-img" src="../../images/g.jpg">
                    </div>                  
                </div>
                <h2 class="text-center title-main">新学说国际学校高级管理研修班-国内班课程主题概览</h2>
                <div class="row text-center">
                    <div class="col-md-4 content01">
                        <p class="content02">国际学校办学政策</p>
                        <p class="">Government Policy</p>
                    </div>
                    <div class="col-md-4 content01">
                        <p class="content02">课程设计与学术保障</p>
                        <p class="">Curriculum Design and Academic Assurance</p>
                    </div>
                    <div class="col-md-4 content01">
                        <p class="content02">国际学校运营与管理</p>
                        <p class="">Operation&Management</p>
                    </div>
                    <div class="col-md-4 content01">
                        <p class="content02">财务与信息化管理</p>
                        <p class="">Finance & IT Management</p>
                    </div>
                    <div class="col-md-4 content01">
                        <p class="content02">人力资源管理</p>
                        <p class="">Human Resource Management</p>
                    </div>
                    <div class="col-md-4 content01">
                        <p class="content02">品牌与集团化发展</p>
                        <p class="">Branding and Group Development</p>
                    </div>
                </div>
                <div class="text-center footBar">
                    <h4 class="">深入了解新学说国际学校高级管理研究所</h4>
                    <h4 class="footDisc">Learn more NSI International Principal Academy</h4>
                    <h4 class="">报名邮箱(E-mail): xuxinmo@xinxueshuo.cn</h4>
                    <h4 class="footLast">咨询电话: 150 1097 7730</h4>
                </div>
            </div>
            <div class="enroll">
                <p @click="enrollNow">立即报名</p>
            </div>
        </div>
        
    </div>    
</template>
<script>
    export default {
        data() {
            return {
                isPcOrMob:'pc',
            }
        },
        methods:{
            enrollNow(){
                window.open('https://jinshuju.net/f/a4LhEl','_blank')
            }
        },
        beforeMount(){
            
        },
        mounted(){
            // if(document.body.clientWidth>768){
            if(window.innerWidth>768){
            this.isPcOrMob='pc'
           }else{
            this.isPcOrMob='mob'
           }
        }
    }
</script>
<style lang="scss">
    .advanced-com{
        .advanced-pc{
            width: 100%;
            .mainPage{
                width: 100%;
            }
            .enroll{
                text-align: center;
                p{
                    color: #fff;
                    background: #2c6daf;
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 20px;
                    letter-spacing: 2px;
                    border-radius: 5px;
                    margin-bottom: 50px;
                }
            }
        }

        .advanced-mob{
            background-color: #ababab3b;
            width: 100%;
            margin: 0 auto;
            .banner{
                margin-bottom: 40px;
                color: #fff;
                width: 100%;
                display: flex;
                justify-content: center;
                // align-items: center;
                flex-direction: column;
                min-height: 250px;
                background-image: url('../../images/b.jpg');
                background-size:140% 100%;
                background-position: -110px 0px;
                background-repeat: no-repeat;
                
            }
            .container{
                width: 80%;
                @media (max-width: 768px) {
                    width: 100%;
                }
                .discrip{
                    line-height: 3.5rem;
                }
                .content01{
                    font-weight: bold;
                    margin-bottom: 45px;
                    .content02{
                        font-size: 115%;
                    }
                }
                .classItem{
                    margin-top: 85px;
                    margin-bottom: 85px;
                    .disItem{
                        margin-top:20px;
                        .item-title01{
                            font-weight: bold;
                            text-align: right;
                            margin-right: 30px;
                            @media (max-width: 768px) {
                                width: 100%;
                                margin-right: 0;
                                text-align: center;
                            }
                        }
                        .titleDis{
                            margin-bottom: 45px;
                        }
                        .item-title02{
                            font-weight: bold;
                            text-align: left;
                            margin-left: 30px;
                            @media (max-width: 768px) {
                                width: 100%;
                                margin-left: 0;
                                text-align: center;
                            }
                        }
                        .item01{
                            margin-right: 30px;
                            text-align: right;
                            font-size: 108%;
                            line-height: 3.5rem;
                            border-bottom:2px dashed #cecece;
                            @media (max-width: 768px) {
                                width: 100%;
                                text-align: left;
                            }
                        }
                        .item02{
                            margin-left: 30px;
                            text-align: left;
                            font-size: 108%;
                            line-height: 3.5rem;
                            border-bottom:2px dashed #cecece;
                        }
                    }
                    .item-img{
                        width: 100%;
                    }
                }
                .title-main{
                    margin-bottom: 65px;
                }
                .footBar{
                    margin-top: 100px;
                    .footDisc{
                        margin-bottom: 25px;
                    }
                    .footLast{
                        margin-bottom: 65px;
                    }
                }
            }
            .enroll{
                text-align: center;
                p{
                    color: #fff;
                    background: #2c6daf;
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    letter-spacing: 2px;
                    border-radius: 5px;
                    position: relative;
                    top: -25px;
                }
            }
        }
    }   
</style>