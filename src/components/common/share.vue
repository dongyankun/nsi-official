<template>
    <div class="share-com">
        <div class="shareBox">
            <div class="share weixin">
                <el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="微信二维码">
                    <img width="150" :src="'http://qr.liantu.com/api.php?text='+newsShareInfo.articleUrl" alt="">
                    <span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat"></span>
                </el-popover>
            </div>
            <div class="share weibo">
                <span title="分享到微博" @click="shareWibo(newsShareInfo.articleUrl,newsShareInfo.title,newsShareInfo.coverImage)" class="iconfont icon-weibo2 weibo"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        newsShareInfo:{},
        required: true
    },
    methods:{
        shareWibo(url,title,picurl){
            let sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
            window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
        }
    }
}
</script>

<style lang="scss">
    .share-com{
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        position: relative;
        z-index: 999;
        .share{
            margin-bottom: 15px;
            width: 40px;
            height: 40px;
            background: #ccd0d3;
            text-align: center;
            line-height: 40px;
            border-radius: 50%;
            cursor: pointer;
            @include transitionAnimate;
            span{
                font-size: 25px;
                color: #FFF;
                @include transitionAnimate;
            }
            &:hover{
                background: #f1f1f1;
            }
            &:hover .weiChat{
                color: #49aa00;
            }
            &:hover .weibo{
                color: #ff001c;
            }
        }
    }
</style>
