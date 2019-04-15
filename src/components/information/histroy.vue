<template>
    <div class="newsList-com histroy" v-loading="loading">
        <div class="container">
            <div class="row">
                <div class="col-md-3 list" v-for="(list,index) in newsList" :key="index">
                    <div class="list-box">
                        <div class="list-img-box">
                            <a href="javascript:;" class="img-box"><img :src="'https://www.xinxueshuo.cn/old_article'+list.path" alt="" @click="toDetail(list.id)"></a>
                        </div>
                        <div class="list-content-box">
                            <h3><a href="javascript:;" :title="list.title" @click="toDetail(list.id)">{{list.title}}</a></h3>
                            <p :title="list.summary">{{list.summary}}</p>
                        </div>
                        <div class="list-share-box">
                            <span class="time">{{list.createTime|timestampToTime}}</span>
                            <p class="text-right">分享到：<el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="这是二维码"><img width="150" :src="'https://www.kuaizhan.com/common/encode-png?large=true&data='+list.articleUrl" alt=""><span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat"></span></el-popover><span title="分享到微博" class="iconfont icon-weibo2 weibo"></span></p>
                        </div>
                    </div>
                </div>
                <histroy-m class="showInMobile col-md-12" :loadNews="newsList"></histroy-m>
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
import histroyM from './history-M'
export default {
    components:{
      histroyM
    },
    data(){
        return{
            pageNum:1,
            loading:true,
            newsList:[],
            addMoreHtml:"加载更多",
        }
    },
    filters:{
        timestampToTime(timestamp) {
            var date = new Date(timestamp * 1000),//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                Y = date.getFullYear() + '-',
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
                D = date.getDate() + ' ',
                h = date.getHours() + ':',
                m = date.getMinutes() + ':',
                s = date.getSeconds()
            return Y+M+D;
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
                url: '/previousArticles/list.do',
                data: params
            }).then((res)=>{
                let msg=res.data.data.list
                for(let i=0;i<msg.length;i++){
                    this.newsList.push(msg[i])
                }
                this.addMoreHtml="加载更多"
            })
        },
        toDetail(id){
            let routeData =this.$router.resolve({name:"historydetail",params:{id:id}})
            window.open(routeData.href, '_blank');
        }
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 8);
        this.axios({
             method: 'post',
             url: '/previousArticles/list.do',
             data:params
        }).then((res)=>{
            let msg=res.data.data.list
            this.newsList=msg
            this.loading=false
            // this.pageNum=1
        })
    }
}
</script>

<style lang="scss">
   @import '../../assets/style/news/common.scss';
   .histroy{
       .showInMobile{
           display: none;
           @media (max-width: 768px) {
               display: block;
           }
       }
       .list-img-box{
           text-align: center;
           .img-box{
               width: 100%;
               img{
                    width: 100%;
                    height: 181px;
                }
           }
       }
       .list-content-box{
           min-height: 100px !important;
           h3{
               max-height: 75px !important;
               a{
                   -webkit-line-clamp: 3 !important;
               }
           }
       }
   }
</style>
