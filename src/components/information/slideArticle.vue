<template>
    <div class="slideArticle-com">
        <h4>最新文章</h4>
        <ul>
            <li v-for="list in newsList">
                <i class="iconfont icon-arrfill_u-copy"></i>
                <a href="javascript:;" @click="toDetail(list.id)">{{list.title}}</a>
                <div class="time">{{list.createTime|formatDate}}
                    <div class="shareTo">分享至：
                        <el-popover placement="bottom-end" title="打开微信 “扫一扫”" width="190" trigger="hover" content="微信二维码">
                            <img width="150" :src="weixinQRcode" alt="">
                            <span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat" @mouseenter="addUrl(list.articleUrl)"></span>
                        </el-popover>
                        <span @click="shareWibo(list.articleUrl,list.title,list.coverImage)" title="分享到微博" class="iconfont icon-weibo2 weibo"></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageNum:1,
            newsList:[],
            weixinQRcode: ""
        }
    },
    filters:{
        formatDate(time,option){
            time = Date.parse(time)
            const d = new Date(time);
            const now = Date.now();
            const diff = (now - d) / 1000;

            if (diff < 30) {
                return '刚刚'
            } else if (diff < 3600) { // less 1 hour
                return Math.ceil(diff / 60) + '分钟前'
            } else if (diff < 3600 * 24) {
                return Math.ceil(diff / 3600) + '小时前'
            } else if (diff < 3600 * 24 * 2) {
                return '1天前'
            }
            if (option) {
                return parseTime(time, option)
            } else {
                return d.getMonth() + 1 + '月' + d.getDate() + '日'
            }
        }
    },
    methods:{
        toDetail(id){
            console.log(id)
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        },
        shareWibo(url,title,picurl){
            let sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
            window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
        },
        addUrl(url) {
            // alert(url)
            // this.weixinQRcode = 'https://www.kuaizhan.com/common/encode-png?large=true&data=' + url
            let _url=url.split('https')[1]
            let currentUrl='http'+_url
            this.weixinQRcode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + currentUrl
        },
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 5);
        this.axios({
             method: 'post',
             url: '/article/list.do',
             data:params
        }).then((res)=>{
            const msg=res.data.data.list
            // console.log(msg)
            this.newsList=msg
        })
    }
}
</script>

<style lang="scss">
    .slideArticle-com{
        i{
          font-style: normal;
        }
        a:hover,a:link{
            text-decoration: none !important;
        }
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        color: #3d464d;
        h4{
            margin: 25px 0 10px;
            padding-top: 20px;
            font-weight: 600;
            font-size: 14px;
            border-top: 2px solid #366df0;
        }
        ul,li{
            margin: 0;
            padding: 0;
            list-style: none;
        }
        li{
            line-height: 1.5;
            padding-left: 15px;
            margin-bottom: 7.5px;
            padding-bottom: 7.5px;
            border-bottom: 1px solid #eee;
            position: relative;
            i{
                position: absolute;
                left: -3px;
                color: #366df0;
                font-weight: 800;
                font-size: 15px;
            }
            a{
                color: #3d464d;
                @include transitionAnimate;
                &:hover{
                    color: #366df0;
                }
            }
            &:hover .shareTo{
                opacity: 1;
            }
        }
        .time{
            color: #a4abb1;
            margin: 5px 0 0;
            font-size: 13px;
            position: relative;
            @media (max-width: 768px) {
                display: none;
            }
            .shareTo{
                position: absolute;
                right: 0;
                top: 0;
                opacity: 0;
                @include transitionAnimate;
                span{
                    cursor: pointer;
                    margin-right: 2px;
                }
                .weiChat:hover{
                        color: #49aa00;
                    }
                .weibo:hover{
                    color: #ff001c;
                }
            }
        }
    }
</style>
