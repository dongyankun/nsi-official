<template>
    <div>
        <div class="consulting-com">
            <connectUs></connectUs>
            <div class="text-center">
                <img class="skeleton" src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/consulting/pcConsult.jpg" alt="">
                <div class="item" style="width:1070px;margin:30px auto;">
                    <el-row :gutter="20">
                      <el-col :span="8" v-for="(list, index) in lists" :key="index" style="margin-bottom:20px;">
                        <el-card :body-style="{ padding: '0px' }">
                          <img :src="list.coverImage" class="insightImage">
                          <div style="padding: 7px;">
                            <h4 style="text-align:left" class="title">{{list.title}}</h4>
                            <div class="bottom clearfix">
                                <p style="color:#999;text-align:left" class="summary">{{list.summary}}</p>
                              <el-button style="float:right" type="text" class="button" @click="toDetail(list.id)">查看更多</el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                </div>
                <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/consulting/pcConsult2.jpg" alt="">
            </div>
        </div>
        <consultMob v-show="mobHtml"></consultMob>
    </div>
</template>

<script>
import connectUs from '../components/consulting/connectUs.vue'
import consultMob from '../components/consulting/consultMob.vue'
import wxShareInit from '../assets/js/weChatShare01.js'
export default {
    data() {
        return {
            mobHtml:false,
            wxShareInfo:{
                title:"新学说 | 国际学校整体解决方案专家",
                imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                href:window.location.href,
                desc:"新学说咨询运用专业能力结合行业知识、专家建议、实地调研、数据分析、解决客户痛点"
            },
            lists:[]
        }
    },
    components: {
        consultMob,connectUs
    },
    created(){
        if(window.innerWidth<769){
            this.mobHtml=true
        }
        this.fetchDate();
    },
    methods:{
        fetchDate(){
            this.axios({
                method:"get",  
                url: '/article/detail.do',
                params:{
                    articleId:20085
                }
            }).then((res)=>{
                // console.log(res)
                this.lists.push(res.data.data)
            })
            this.axios({
                method:"get",
                url: '/article/detail.do',
                params:{
                    articleId:20084
                }
            }).then((res)=>{
                // console.log(res)
                this.lists.push(res.data.data)
            })
            this.axios({
                method:"get",
                url: '/article/detail.do',
                params:{
                    articleId:20083
                }
            }).then((res)=>{
                // console.log(res)
                this.lists.push(res.data.data)
            })
            this.axios({
                method:"get",
                url: '/article/detail.do',
                params:{
                    articleId:20082
                }
            }).then((res)=>{
                // console.log(res)
                this.lists.push(res.data.data)
            })
            // console.log(this.lists)
        },
         toDetail(id){
            // console.log(id)
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        }

    },
    beforeMount(){
        // 微信分享
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(wxShareInit.wxReady(this.wxShareInfo),500)
        }
    },
    watch:{
        "$route": "fetchDate"
    }
}
</script>

<style lang="scss">
    .consulting-com{
        .title{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            min-height: 40px;
            max-height: 40px;
        }
        .summary{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            min-height: 60px;
            max-height: 60px;
        }
        @media (max-width: 768px) {
            padding-top: 0;
            display:none;
        }
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
        }
        .content{
            padding-top: 100px;
            @media (max-width: 768px) {
                padding-top: 30px;
            }
        }
    }
    .consultList{
        span{
            display: inline-block;
            padding:0;
        }
        .consultListActive{
            color:rgb(255, 208, 75);
        }
    }
</style>
