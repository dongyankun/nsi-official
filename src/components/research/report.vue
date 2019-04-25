<template>
    <div class="periodical-com">
        <!-- 报告 -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <!-- <h1 class="title">内参<span class="year">2017</span></h1> -->
                        <h1 class="title">报告</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-6" v-for="(list,index) in internalReferList" :key="index">
                    <div class="internalRefer-book">
                            <a href="javascript:;" @click="toDownload(list.fileUrl)" class="internalRefer-box" slot="reference" :style="{'background-image':'url('+list.imageUrl+')'}">
                            </a>
                        <h4 :title="list.bookName" class="bookName" @click="openTips">{{list.fileName.split(".")[0]}}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="buyFull">
            <p @click="buyFull">购买完整版研究报告</p>
        </div>
        <div class="erweima" :class="isShow ? 'show':'hide'">
            <span class="title">国际教育研究院</span>
            <span class="close"  @click="isShowBox">×</span>
            <img src="../../images/erweima.png" alt="" class="img-responsive">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             pageNum:1,
            // 内参
            internalReferList:[],
            isShow:false
        } 
    },
    methods:{
        openTips(){
            // this.$notify.info({
            //     title: '提示',
            //     message: '点击即可下载期刊&报告电子版',
            //     duration: 0,
            //     offset: 150
            // });
        const h = this.$createElement;
        this.$notify({
                title: '温馨提示',
                message: h('i', { style: 'color: #20528f'}, '点击书面即可下载'),
                offset: 150,
                type:'info',
                duration:3000
            });
        },
         // 判断微信浏览器
        isWechat(){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger"){
                return true
            }
        },
        // 判断ios
        isIOS(){
            var u = navigator.userAgent,version = '';
            if(u.indexOf('Mac OS X') > -1){
                return true
            }
        },
        toDownload(url){
             // 为ios微信浏览器
            if(this.isWechat()&&this.isIOS()&&url.indexOf('.zip')>-1){
                const h = this.$createElement;
                this.$notify({
                    title: '温馨提示',
                    message: h('i', { style: 'color: #20528f'}, '请在Safari浏览器打开下载'),
                    offset: 150,
                    type:'info',
                    duration:3000
                });
            }else{
                window.open(url)
            }
        },
        buyFull(){
            window.open("https://www.xinxueshuo.cn/nsi-shop/dist/index.html#/", '_blank')
            // if(screen.width<=768){
            //     this.isShow=false
            //     window.open("https://www.xinxueshuo.cn/nsi-shop/dist/index.html#/", '_blank')
            // }else{
            //     this.isShow=true
            // }
        },
        isShowBox(){
            this.isShow=false
        }
    },
    mounted(){
        this.openTips()
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 8);
        params.append('type', '报告');
        this.axios({
             method: 'post',
             url: '/manager/resource/list.do',
             data:params
        }).then((res)=>{
            // console.log(res)
            this.internalReferList=res.data.data.list
            // console.log(this.internalReferList)
        })
    }
}
</script>

<style lang="scss" scoped>
    .periodical-com{
        background-color: #fafafa;
        padding-bottom: 30px;
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        .internal{
            padding: 50px 0 20px;
            @media (max-width: 768px) {
                padding: 10px 0 5px;
            }
            .title{
                display: inline-block;
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
                    margin-bottom: 15px;
                    margin-top: 10px;
                }
                .year{
                    position: absolute;
                    right: -12px;
                    top: 48px;
                    font-size: 20px;
                    color: #d2d1d1;
                    letter-spacing: 0;
                    line-height: 20px;
                }
            }
        }
        .internalRefer-book{
            width: 100%;
            min-height: 345px;
            margin-bottom: 30px;
            @media (max-width: 768px) {
                min-height: 232px;
            }
            .bookName{
                color: #a3a3a3;
                font-size: 20px;
                margin-top: 15px;
                overflow: hidden;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-height: 45px;
                max-height: 45px;

            }
            .internalRefer-box{
                display: inline-block;
                width: 100%;
                min-height: 345px;
                box-shadow: 0 5px 10px #ccc;
                @media (max-width: 768px) {
                    min-height: 232px;
                }
                background-color: #e4e4e4;
                background-size: 100% 100%;
                @include transitionAnimate;
                &:hover{
                    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.20);
                    text-decoration: none;
                    z-index: 2;
                }
            }
        }
        .buyFull{
            text-align: center;
            p{
                color: #fff;
                background: #2c6daf;
                display: inline-block;
                padding: 10px 20px;
                font-size: 16px;
                letter-spacing: 2px;
                border-radius: 5px;
            }
        }
        .erweima{
                position: absolute;
                right:43%;
                top: 40%;
                height: 35%;
                width: 280px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 3px 1px rgba(0, 0, 0, .26);
                text-align: center;
                &:after{
                    content: ' ';
                    display: block;
                    position: absolute;
                    left: 44%;
                    bottom: -15px;
                    width: 30px;
                    height: 30px;
                    background: #ffffff;
                    -webkit-box-shadow: -2px -2px 4px -2px rgba(0, 0, 0, 0.5);
                    box-shadow: 2px -2px 4px -2px rgba(0, 0, 0, 0.5);
                    -webkit-transform: rotate(135deg);
                }
            .title{
                position: relative;
                top: 20px;
                left: -58px;
                font-size: 16px;
            }
            .close{
                position: relative;
                right: 20px;
                top: 20px;
                border: 1px solid;
                border-radius: 50%;
                width: 22px;
                height: 22px;
                line-height: 22px;
                padding-right: 1px;
            }
            img{
                width: 88%;
                display: inline-block;
                position: relative;
                top: 36px;
            }
        }
    }
</style>
