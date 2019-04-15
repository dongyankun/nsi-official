<template>
    <div class="consuleMain newsConsuleMain">
        <div class="banner">
            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/consulting/insight.jpg" alt="">
        </div>  
        <div class="item">
            <el-row :gutter="20">
              <el-col :span="24" v-for="(list, index) in lists" :key="index" style="margin-bottom:20px;">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="list.coverImage" class="insightImage">
                  <div style="padding: 7px;">
                    <h4 style="text-align:left" class="title">{{list.title}}</h4>
                    <!-- <p style="text-align:left">鼎石的市场传播到底牛在哪里？</p> -->
                    <div class="bottom clearfix">
                         <p style="color:#999;text-align:left" class="summary">{{list.summary}}</p>
                      <el-button style="float:right" type="text" class="button" @click="toDetail(list.id)">查看更多</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            lists:[]
        }
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
    mounted(){
        
    },
    created(){
        this.fetchDate();
    },
    watch:{
        "$route": "fetchDate"
    }
}
</script>

<style lang="scss">
    @import "../../assets/style/consult/main.scss";
    .newsConsuleMain{
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
    }
</style>
