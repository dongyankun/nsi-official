<template>
    <div class="nsiProduct-com">
        <div class="container productContainer">
            <div class="row">
                <div class="col-md-3 col-xs-6">
                    <div class="productBox">
                        <div class="product-logo text-center">
                            <a href="https://www.xinxueshuo.cn/#/news/latest" target="_blank"><span class="iconfont icon-zixun" style="font-size:50px"></span><br></a>
                        </div>
                        <div class="product-name text-center">
                            <p><a href="https://www.xinxueshuo.cn/#/news/latest" target="_blank" class="name">教育资讯&nbsp;<span class="iconfont icon-yuanjiantou"></span></a></p>
                        </div>
                        <!-- <div class="bg">
                            <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html">新荷学校</a>
                        </div> -->
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <div class="productBox">
                        <div class="product-logo text-center">
                            <a style="margin: -14px;" href="http://data.xinxueshuo.cn" target="_blank" class="databaseLogo"><span class="iconfont icon-shu"></span></a>
                        </div>
                        <div class="product-name text-center">
                            <p><a href="http://data.xinxueshuo.cn" target="_blank" class="name">国际学校四库全书&nbsp;<span class="iconfont icon-yuanjiantou"></span></a></p>
                        </div>
                        <!-- <div class="bg">
                            <a href="http://class.xinxueshuo.cn">新学说四库全书</a>
                        </div> -->
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <div class="productBox">
                        <div class="product-logo text-center">
                            <a href="http://class.xinxueshuo.cn" target="_blank"><img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/classLogo.png" width="50" alt="" style="padding:5px 0"></a>
                        </div>
                        <div class="product-name text-center">
                            <p><a href="http://class.xinxueshuo.cn" target="_blank" class="name">新学说在线课堂&nbsp;<span class="iconfont icon-yuanjiantou"></span></a></p>
                        </div>
                        <!-- <div class="bg">
                            <a href="http://class.xinxueshuo.cn">新学说在线课堂</a>
                        </div> -->
                    </div>
                </div>
                <div class="col-md-3 col-xs-6">
                    <div class="productBox">
                        <div class="product-logo text-center">
                            <a href="http://data.xinxueshuo.cn/nsi-class/admin/activity/meeting/vis2018_pc.html" target="_blank"><img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/layoutImg/vis2018.png" width="65" alt=""></a>
                        </div>
                        <div class="product-name text-center">
                            <p><a href="http://data.xinxueshuo.cn/nsi-class/admin/activity/meeting/vis2018_pc.html" target="_blank" class="name">VIS2018国际学校发展大会&nbsp;<span class="iconfont icon-yuanjiantou"></span></a></p>
                        </div>
                        <!-- <div class="bg">
                            <a href="http://data.xinxueshuo.cn/nsi-class/admin/activity/meeting/vis2018_pc.html">VIS2018国际学校发展大会</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .nsiProduct-com{
        $official-hoverColor:#0e3361;
        .pl0{
            padding-left: 0;
        }
        .pr0{
            padding-right: 0;
        }
        .productContainer{
            // padding: 15px;
            // background-color: #f8f8f8;
            padding-left: 0;
            padding-right: 0;
        }
        @mixin transitionAnimate{
          -webkit-transition: all 0.3s ease 0s;
          -ms-transition: all 0.3s ease 0s;
          -o-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
      }
        margin: 30px 0;
        .productBox{
            position: relative;
            padding: 10px 15px;
            background-color: #f8f8f8;
            min-height: 140px;
            @include transitionAnimate();
            .databaseLogo{
                span{
                    font-size: 70px;
                }
                &:hover{
                    text-decoration: none;
                }
            }
            &:hover{
                background-color: #fff;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
            }
            .product-logo{
                a{
                    display: inline-block;
                }
            }
            .product-name{
                a{
                    display: inline-block;
                    margin-top: 10px;
                    font-size: 17px;
                    color: #9f9f9f;
                    &:hover{
                        text-decoration: none;
                    }
                    span{
                        color: #699bda;
                        font-size: 20px;
                        position: relative;
                        top: 1px;
                    }
                }
            }
            &:hover .name{
                color: $official-hoverColor
            }
            .bg{
                position: absolute;
                width: 100%;
                height: 100%;
                background-color:rgba(29, 78, 138, 0.9);
                left: 0;
                top: 0;
                opacity: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                @include transitionAnimate();
                a{
                    color: #FFF;
                    font-size: 22px;
                    text-decoration: none;
                }
            }
            &:hover .bg{
                opacity: 1;
            }
        }
    }
</style>
