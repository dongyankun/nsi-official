<template>
    <div class="newsDetail-com">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="newsDetail-title">{{detail.title}}</h1>
                </div>
            </div>
            <div class="row news-content-box">
                <div class="col-md-9 news-content">
                    <!-- <div class="newsDetail-img">
                        <img :src="detail.coverImage" alt="">
                    </div> -->
                    <div class="author">
                        <p class="news-summary">{{detail.summary}}</p>
                        <p class="news-info"><strong>责任编辑：{{detail.articleWriter}}</strong><span class="news-time">{{detail.updateTime}}</span></p>
                    </div>
                    <div v-html="detail.articleContent" class="news-article-content"></div>
                    <div class="cut-off-line text-center"><span class="cut-off-text">● END ●</span></div>
                    <div class="statement">
                        <p class="nsi-statement" v-if="detail.articleSourceTitle=='新学说'">本文系<a href="http://xinxueshuo.cn">{{detail.articleSourceTitle}}</a>原创文章，转载须经授权，违者将依法追究责任。</p>
                        <p class="nsi-statement" v-else>本文系<a href="http://xinxueshuo.cn"> 新学说 </a>转载文章，来源 <a :href="detail.articleSourceAdress">{{detail.articleSourceTitle}}</a></p>
                        <div>
                          <div class="row">
                            <div class="col-md-2 col-xs-4 text-center">
                              <img src="../../assets/img/layoutImg/wechat_QR.png" alt="">
                            </div>
                            <div class="col-md-10 col-xs-8 pl0 mt15 connection">
                              <p>新学说面向国际学校行业，传递行业资讯，深挖有价值内容，有料有态度，如果你想投稿或爆料，<br/></p>
                              <p>请联系小新：15010927730（微信同号）</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="slide-ad">
                        <slide-ad/>
                    </div>
                    <div class="slide-article">
                        <slide-article/>
                    </div>
                </div>
            </div>
            <shareBox :newsShareInfo="shareInfo" class="newsShare"/>
        </div>
        <back-top></back-top>
    </div>
</template>

<script>
import slideAd from './slideAD'
import shareBox from '../common/share'
import slideArticle from './slideArticle'
import backTop from '../common/backToTop'
export default {
    components:{
        slideAd,
        shareBox,
        slideArticle,
        backTop
    },
    data(){
        return{
            listId:"",
            detail:{},
            shareInfo:{}
        }
    },
    methods:{
         fetchDate(){
            this.listId = this.$route.params.id;
            this.axios({
                method:"get",
                url: '/article/detail.do',
                params:{
                    articleId:this.listId
                }
            }).then((res)=>{
                // console.log(res)
                this.detail=res.data.data
                this.shareInfo=res.data.data
                document.title=this.detail.title
            })
        }
    },
    created(){
        this.fetchDate();
    },
    destroyed(){
        document.title="新学说 | 国际学校多边服务平台"
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
    .newsDetail-com{
        // padding: 0 35px;
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
        }
        .pl0{
          padding-left: 0;
        }
        .mt15{
          margin-top: 15px;
        }
        img{
            display: inline-block;
            max-width: 100% !important;
            height: auto;
        }
        .pt50{
            padding-top: 50px;
            @media (max-width: 768px) {
                padding-top: 0;
            }
        }
        .newsDetail-title{
            padding-bottom: 30px;
            border-bottom: 1px solid #d5d5d5;
            margin-bottom: 30px;
            @media (max-width: 768px) {
                font-size: 25px;
                font-weight: 700;
                line-height: 1.5;
                color: #444;
            }
        }
        .news-content{
            border-right:  1px solid #d5d5d5;
            // padding-right: 30px;
            .newsDetail-img{
                margin-bottom: 20px;
            }
            .news-summary{
                font-size: 15px;
                line-height: 1.75;
                color: #6e6e6e;
                background-color: #fafafa;
                padding: 20px 15px;
                border-left: 5px solid #6e6e6e;
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
                    // text-indent: 35px;
                }
            }
            .statement{
              background-color: #f9f9f9;
              padding: 20px 15px;
              color: #999;
                .nsi-statement{
                    border-bottom: 1px solid #eeeeee;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }
            }
        }
        .slide-ad{
            @media (max-width: 768px) {
                margin-top: 15px;
            }
            p{
                .ad{
                    transition: all .3s;
                }
                &:hover .ad{
                    opacity: .8
                }
            }
        }
        .cut-off-line{
            padding:0 0 30px 0;
            color: #aaa;
            position: relative;
        }
        .cut-off-text{
            background: #FFF;
            position: relative;
            z-index: 99;
            padding: 0 10px;
        }
        .cut-off-line::before{
            display: block;
            content: "";
            position: absolute;
            width: 100%;
            height: 1px;
            border-bottom: 1px dashed #e2e2e2;
            top: 9px;
        }

        .connection{
            @media (max-width: 768px) {
                margin-top: 0;
            }
        }

        // 分享
        .newsShare{
            position: fixed;
            // bottom: 400px;
            bottom: 100px;
            left: 80px;
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
</style>
