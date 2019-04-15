<template>
    <div class="newsList-com" v-loading="loading">
        <div class="container">
            <div class="row">
                <div class="col-md-3 list" v-for="(list,index) in newsList" :key="index">
                    <div class="list-box">
                        <div class="list-img-box">
                            <a href="javascript:;" class="img-box"><img :src="list.coverImage" alt="" height="270" @click="toDetail(list.id)"></a>
                        </div>
                        <div class="list-content-box">
                            <h3><a href="javascript:;" :title="list.title">{{list.title}}</a></h3>
                            <p :title="list.summary">{{list.summary}}</p>
                        </div>
                        <div class="list-share-box">
                            <span class="time">{{list.createTime|formatDate}}</span>
                            <p class="text-right">分享到：
                                <el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="这是二维码">
                                    <img width="150" :src="weixinQRcode" alt="">
                                    <span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat" @mouseenter="addUrl(list.articleUrl)"></span>
                                </el-popover><span @click="shareWibo(list.articleUrl,list.title,list.coverImage)" title="分享到微博" class="iconfont icon-weibo2 weibo"></span>
                            </p>
                        </div>
                    </div>
                </div>
                <original-m class="showInMobile col-md-12" :loadNews="newsList"></original-m>
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
import originalM from './original-M'
export default {
    components:{
      originalM
    },
    data(){
        return{
            pageNum:1,
            loading:true,
            newsList:[],
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
                let msg=res.data.data.list
                for(let i=0;i<msg.length;i++){
                    if(msg[i].articleCat==="行业分析"){
                        this.newsList.push(msg[i])
                    }
                }
                this.addMoreHtml="加载更多"
            })
        },
        toDetail(id){
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        },
        shareWibo(url,title,picurl){
            let sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
            window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
        },
        addUrl(url) {
            // this.weixinQRcode = 'https://www.kuaizhan.com/common/encode-png?large=true&data=' + url
            let _url=url.split('https')[1]
            let currentUrl='http'+_url
            this.weixinQRcode = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + currentUrl
        }
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 16);
        params.append('articleCat',"行业分析")
        this.axios({
             method: 'post',
             url: '/article/list.do',
             data:params
        }).then((res)=>{
            let msg=res.data.data.list,
                originalList=[]
            for(let i=0;i<msg.length;i++){
                if(msg[i].articleCat==="行业分析"){
                    originalList.push(msg[i])
                }
            }
            // console.log(originalList)
            this.newsList=originalList
            this.loading=false
            this.pageNum=2
        })
    }
}
</script>

<style lang="scss">
    @import '../../assets/style/news/common.scss';
</style>
