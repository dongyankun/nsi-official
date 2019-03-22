<template>
    <div class="eventDetail-com">
        <div class="container pt50">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="newsDetail-title text-center">{{detail.title}}</h1>
                </div>
            </div>
            <div class="row news-content-box">
                <div class="col-md-12 news-content">
                    <!-- <div class="newsDetail-img">
                        <img :src="detail.coverImage" alt="">
                    </div> -->
                    <div class="author">
                        <p class="news-summary">{{detail.summary}}</p>
                        <p class="news-info"><strong>责任编辑：{{detail.articleWriter}}</strong><span class="news-time">{{detail.updateTime}}</span></p>
                    </div>
                    <div v-html="detail.articleContent" class="news-article-content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listId:"",
            detail:{}
        }
    },
    methods:{
         fetchDate(){
            // this.listId = this.$route.params.id;
            this.listId = 20052;
            this.axios({
                method:"get",
                url: '/article/detail.do',
                params:{
                    articleId:this.listId
                }
            }).then((res)=>{
                console.log(res)
                this.detail=res.data.data
            })
        }
    },
    created(){
        this.fetchDate();
    },
    // mounted(){
    //     this.listId = this.$route.params.id;
    //     alert(this.listId)
    //     // const params = new URLSearchParams();
    //     this.axios({
    //         method:"get",
    //         url: 'http://192.168.0.191:8080/nsi-1.0/article/detail.do',
    //         params:{
    //             articleId:this.listId
    //             }
    //     }).then((res)=>{
    //         console.log(res)
    //     })
    // },
    watch:{
        "$route": "fetchDate"
    }
}
</script>

<style lang="scss">
    .eventDetail-com{
        padding: 0 150px;
        padding-top: 52px;
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
        }
        .pt50{
            padding-top: 50px;
        }
        .newsDetail-title{
            padding-bottom: 30px;
            border-bottom: 1px solid #d5d5d5;
            margin-bottom: 30px;
        }
        .news-content{
            .newsDetail-img{
                margin-bottom: 20px;
            }
            .news-summary{
                font-size: 15px;
                line-height: 1.75;
                color: #6e6e6e;
                text-indent: 32px;
            }
            .news-info{
                line-height: 1.1;
                font-size: 16px;
                padding: 15px 0 25px;
                strong{
                    font-weight: 700;
                    padding-right: 15px;
                }
                .news-time{
                    font-size: 14px;
                    color: #aaa;
                    padding-right: 0.5em;
                    line-height: 1.3em;
                    white-space: nowrap;
                }
            }
            .news-article-content{
                line-height: 30px;
                color: #333333;
                font-size: 16px;
                margin-bottom: 46px;
                letter-spacing: 0.5px;
                p{
                    margin-bottom: 20px;
                    margin-top: 10px;
                    text-indent: 35px;
                }
            }
        }
    }
</style>
