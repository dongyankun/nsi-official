<template>
    <div id="activityBanner" ref="obj">
        <div class="container">
            <div class="row">
                <div class="col-md-12 cardTop">
                    <a href="http://data.xinxueshuo.cn/nsi-event/event/2018VIS-live/2018VIS-live.html" target="_blank">
                        <div class="box">
                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/activity/visLogo.png" alt="" class="img-responsive" width="90">
                            <span class="title">2018国际学校发展大会</span>
                            <p><span>时间：2018.11.09 - 2018.11.11</span><span style="margin-left:15px;">地点：北京昆泰酒店</span></p>
                            <p class="hiddenPc"><span>时间：2018.11.09 - 2018.11.11</span></p>
                            <a href="http://data.xinxueshuo.cn/nsi-event/event/2018VIS-live/2018VIS-live.html" target="_blank" class="pulse infinite " :class='{"animated":isMobile}'>正在进行中</a>
                        </div>
                        <div class="pic">
                            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/activity/vis01.jpg" alt="" class="img-responsive banner">
                            <a href="http://data.xinxueshuo.cn/nsi-event/event/2018VIS-live/2018VIS-live.html" target="_blank" class="animated pulse infinite">
                                <span class="iconfont icon-bofang"></span>
                            </a>
                        </div>
                    </a>
                    <span class="closeLogo" @click="closeLogo">×</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isMobile:false
        }
    },
    methods:{
        closeLogo:function(){
            var that=this
            var heightDecrease=that.$refs.obj.offsetHeight
            for(var i=0;i<that.$refs.obj.offsetHeight+1;i++){
                (function(i){
                    setTimeout(function(){
                        document.getElementById("activityBanner").style.height=heightDecrease--
                    },30)
                    // console.log(heightDecrease-- + 'px')
                })(i)
            }
        }          
    },
    mounted(){
        if(window.screen.width<768){
            this.isMobile=true;
        }
    }
}
 
</script>

<style lang="scss">
    #activityBanner{
        transition: all 0.5s;
        height:680px;
        background: -webkit-linear-gradient(-45deg,#d1b7d7 25%, #fbfcfe 53%, #cae9fb 99%);
        overflow: hidden;
        z-index: 999;
        @media (max-width:768px) {
            height:75px;
        }
        .cardTop{
            position: relative;
            top:-40px;
            z-index: 999;
            .box{
                width:70%;
                height:90px;
                line-height: 100px;
                position: relative;
                top: 535px;
                left: 158px;
                background-color: #fff;
                border-radius: 10px;
                @media(max-width:768px) {
                    width: 96%;
                    height: 55px;
                    top: 47px;
                    left: 8px;
                }
                img{
                    margin: 3px 40px;
                    @media(max-width:768px){
                        width: 14%;
                        margin: 2px 10px;
                    }
                }
                span.title{
                    position: absolute;
                    top: -20px;
                    left: 165px;
                    font-size: 30px;
                    color: black;
                    font-weight: bold;
                    @media (max-width:768px) {
                        font-size: 15px;
                        left: 19%;
                        top: -33px;
                    }
                }
                p{
                   position: absolute;
                    top: 18px;
                    left: 165px; 
                    font-size: 16px;
                    @media (max-width: 768px) {
                        top: -12px;
                        left: 72px;
                        font-size: 10px;
                        display:none;
                    }
                }
                p.hiddenPc{
                    display:none;
                    @media (max-width:768px) {
                        display:block;
                        left: 19%; 
                    }
                }
                a{
                    width: 145px;
                    height: 45px;
                    line-height: 45px;
                    position: absolute;
                    right: 55px;
                    top: 23px;
                    color: #fff;
                    border-radius: 25px;
                    font-size: 20px;
                    text-align: center;
                    border: 1px solid #e61616;
                    -webkit-transition: all 0.1s ease 0s;
                    transition: all 0.1s ease 0s;
                    background-image: -webkit-gradient(linear, left top, left bottom, from( #ef1a1a), to(red));
                    background-image: linear-gradient(-180deg,  #ef1a1a 0%, red 100%);
                    -webkit-box-shadow: 0 5px 30px #ccc;
                    box-shadow: 0 5px 30px #ccc;
                    &:hover{
                        text-decoration: none;
                    }
                    @media (max-width:768px){
                        font-size: 14px;
                        width: 25%;
                        height: 30px;
                        line-height: 28px;
                        top: 12px;
                        right: 18px;
                        border-radius: 20px;
                        font-weight: 600;
                    }
                }
            } 
            img.banner{
                display:inline-block;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                @media (max-width:768px) {
                    display:none;
                }
            }
            .pic{
                display: flex;
                justify-content: center;
                align-items: center;
                a{
                    position: absolute;
                    color: rgba(255,255,255,.9);
                    text-shadow: 0 3px 8px rgba(7, 17, 27, 0.7);
                    &:hover{
                        text-decoration: none;
                        color: rgba(255,255,255,1);
                    }
                    span{
                        font-size: 90px;
                    }
                    @media (max-width:768px) {
                        display:none;
                    }
                }
            }
            .closeLogo{
                color: black;
                font-size: 60px;
                position: relative;
                top: -572px;
                left: 1100px;
                cursor: pointer;
                @media(max-width:768px){
                    display:none;
                    font-size: 35px;
                    color: #575656;
                    position: absolute;
                    top: 26px;
                    right: 0;
                    left:auto;
                }
            }
        }
    }
</style>
