<template>
    <div class="newsList-com" v-loading="loading">
        <div class="container">
            <div class="row">
                <div class="col-md-3 list" v-for="(list,index) in newsList" :key="index">
                    <div class="list-box">
                        <div class="list-img-box">
                            <!-- <a href="javascript:;" class="img-box"><img :src="list.coverImage" alt="" height="270" @click="toDetail(list.id)"><i class="articleType">{{list.articleCat|articleType}}</i></a> -->
                            <a :href="list.articleUrl" class="img-box" target="_blank"><img :src="list.coverImage" alt="" height="270" ><i class="articleType">{{list.articleCat|articleType}}</i></a>
                        </div>
                        <div class="list-content-box">
                            <!-- <h3><a href="javascript:;" :title="list.title" @click="toDetail(list.id)">{{list.title}}</a></h3> -->
                            <h3><a :href="list.articleUrl" :title="list.title" target="_blank">{{list.title}}</a></h3>
                            <p :title="list.summary">{{list.summary}}</p>
                        </div>
                        <div class="list-share-box">
                            <span class="time">{{list.createTime|formatDate}}</span>
                            <p class="text-right">分享到：
                                <el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="微信二维码">
                                    <img width="150" :src="weixinQRcode" alt="" >
                                    <span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat" @mouseenter="addUrl(list.articleUrl)"></span>
                                </el-popover><span @click="shareWibo(list.articleUrl,list.title,list.coverImage)" title="分享到微博" class="iconfont icon-weibo2 weibo"></span>
                            </p>
                        </div>
                    </div>
                </div>
                <news-list-m class="col-md-12 showInMobile" :loadNews="newsList"></news-list-m>
            </div>
            <div class="row mt20">
                <div class="col-md-12 text-center">
                    <a href="javascript:;" class="loadMore" @click="addMore">{{addMoreHtml}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import newsListM from './newsList-M'
export default {
    components:{
        newsListM
    },
    data(){
        return{
            pageNum:1,
            newsList:[],
            loading:true,
            addMoreHtml:"加载更多",
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
        },
        articleType(str){
            switch(str){
                case "行业分析":
                    return str="分析"
                    break;
                case "访校观察":
                    return str="访校"
                    break;
                case "政策解读":
                    return str="政策"
                    break;
                case "人物访谈":
                    return str="人物"
                    break;
                default:
                    return str="资讯"
                    break;
            }
        }
    },
    methods:{
        addMore(){
            this.addMoreHtml="加载中..."
            this.pageNum++
            const params = new URLSearchParams();
            params.append('pageNum', this.pageNum);
            params.append('pageSize', 8);
            this.axios({
                method: 'post',
                url: '/article/list.do',
                data: params
            }).then((res)=>{
                const msg=res.data.data.list
                // console.log(msg)
                for(let i=0;i<msg.length;i++){
                    this.newsList.push(msg[i])
                }
                this.loading=false
                this.addMoreHtml="加载更多"
            })
        },
        toDetail(id){
            // console.log(id)
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        },
        shareWibo(url,title,picurl){
            let sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
            window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
        },
        addUrl(url) {
            this.weixinQRcode="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/common/loading.gif"
            let _url=url.split('https')[1]
            let currentUrl='http'+_url
            this.weixinQRcode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + currentUrl
        },
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 16);
        this.axios({
             method: 'post',
             url: '/article/list.do',
             data:params
        }).then((res)=>{
            const msg=res.data.data.list
            // console.log(msg)
            this.newsList=msg
            this.loading=false
            this.pageNum=2
        })
    }
}
</script>

<style lang="scss">
  @import '../../assets/style/news/common.scss';
</style>
