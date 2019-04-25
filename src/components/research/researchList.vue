 <template>
    <div class="eventList-com researchList-com">
        <div class="container">
            <h2 class="title">热门课程<span class="hot">HOT</span></h2>
            <div class="row">
                <!-- <div class="col-md-4 col-xs-12 mb15" v-for="(list,index) in eventList">
                    <a class="event-list" :href="list.url" target="_blank">
                        <div class="event-box" :style="{'background-image':'url('+list.imgSrc+')'}">
                            <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                        </div>
                    </a>
                </div> -->
                <div class="col-md-6 col-xs-6 mb30" v-for="(list,index) in eventList" :key="index">
                    <div class="row">
                      <div class="col-md-8 pl0 pr0">
                        <a class="event-list" :href="list.url" target="_blank">
                            <div v-if="isMobile" class="event-box" :style="{'background-image':'url('+list.imgSrcM+')'}">
                                <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                            </div>
                            <div v-else class="event-box" :style="{'background-image':'url('+list.imgSrc+')'}">
                                <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                            </div>
                        </a>
                      </div>
                      <div class="col-md-4 pr0">
                        <div class="researchInfo">
                            <h5 class="research-title">{{list.title}}</h5>
                            <p class="apply-time"><span class="iconfont icon-shijian timeLogo"></span> {{list.time}}</p>
                            <a :href="list.url" target="_blank" class="toApply">了解详情</a>
                        </div>
                      </div>
                    </div>
                </div>
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
export default {
    data(){
        return{
            isMobile:false,
            addMoreHtml:"加载更多",
            eventList:[
                {
                    title:"国际学校市场招生班",
                    imgSrc:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/mac.jpg",
                    imgSrcM:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/researchM01.jpg',
                    url:"http://data.xinxueshuo.cn/nsi-class/admin/activity/courseDesc/macM.html",
                    time:"2018-09-03"
                },
                 {
                    title:"国际学校投资战略班",
                    imgSrc:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/zhanlue.jpg",
                    imgSrcM:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/zhanlue.jpg",
                    url:"https://jinshuju.net/f/UbcHrR",
                    time:"2018-09-03"
                },
                {
                    title:"国际学校校长研修班",
                    imgSrc:"https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/headteacher.jpg",
                    imgSrcM:'https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/research/researchM02.jpg',
                    url:"https://jinshuju.net/f/a4LhEl",
                    time:"2018-09-03"
                },
            ]
        }
    },
    methods:{
        getDetail(){
            this.$router.push({name:"eventDetail"})
        },
        addMore(){
            console.log("加载更多")
        }
    },
    created(){
        if(window.innerWidth<769){
            this.isMobile=true
        }else{
            this.isMobile=false
        }
    }
}
</script>

<style lang="scss">
    .researchList-com{
        // common
         @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        .pl0{
            padding-left: 0;
        }
        .pr0{
            padding-right: 0;
        }
        .mb15{
            margin-bottom: 15px;
        }
        .mb30{
          margin-bottom: 30px;
        }
        .mt20{
            margin-top: 20px;
        }
        background: #fafafa;
        margin-bottom: -50px;
        padding: 50px 0;
        @media (max-width: 768px) {
            padding: 0 0 50px;
        }
        .title{
            display: inline-block;
            font-family: PingFangSC-Semibold;
            font-size: 48px;
            color: #c8c8c8;
            letter-spacing: 10px;
            line-height: 48px;
            height: 50px;
            position: relative;
            margin-bottom: 40px;
            @media (max-width: 768px) {
                font-size: 30px;
                margin-bottom: 20px;
            }
            .hot{
                position: absolute;
                right:-12px;
                top: 48px;
                font-size: 20px;
                color: #e4e4e4;
                letter-spacing: 0;
                line-height: 20px;
                @media (max-width: 768px) {
                    top: 40px;
                }
            }
        }
        .event-list{
            color: #000;
            display: block;
            padding: 10px;
            width: 100%;
            opacity: 1;
            border-radius: 2px;
            @include transitionAnimate;
            background: #FFF;
            position: relative;
            &:hover{
                background: #FFF;
                box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.20);
                color: #44638a;
                text-decoration: none;
                z-index: 2;
            }
            .event-box{
                position: relative;
                width: 100%;
                height: 185px;
                background-size: cover;
                background-position: center;
                border-radius: 2px;
                @media (max-width: 768px) {
                    height: 150px;
                }
            &::before{
                    display: block;
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: rgba(0, 0, 0, 0);
                    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.05) 2%, rgba(0, 0, 0, 0.3) 100%);
                    @include transitionAnimate;
                    @media (max-width: 768px) {
                    height: 150px;
                }
                }
            &:hover::before{
                    opacity: .2;
                }
            &:hover .event-box-title{
                opacity:1;
            }
            }
            .event-box-title{
                    position: absolute;
                    // padding-right: 50px;
                    left: 15px;
                    bottom: 15px;
                    margin-top: 10px;
                    font-family: PingFangSC-Semibold;
                    color: #FFF;
                    font-weight: 700;
                    font-size: 25px;
                    letter-spacing: 0;
                    line-height: 34px;
                    overflow: hidden;
                    text-overflow: -o-ellipsis-lastline;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    min-height: 34px;
                    max-height: 34px;
                    margin-bottom: 2px;
                    text-shadow: 0 4px 8px rgba(7, 17, 27, 0.8);
                    opacity: 0;
                    @include transitionAnimate;
                    @media (max-width: 768px) {
                        opacity:1;
                        font-size: 16px;
                        padding-right: 15px;
                        left: 15px;
                        bottom: 15px;
                        display: none;
                    }
            }
        }
        .researchInfo{
          position: relative;
          padding-top: 20px;
          @media (max-width: 768px) {
            padding-top: 0;
          }
          .research-title{
              min-height: auto !important;
              font-weight: 700;
              font-size: 17px;
              margin-bottom: 20px;
              color: #4d555d;
              @media (max-width: 768px) {
                margin-bottom: 10px;
              }
            }
          .toApply{
            display: inline-block;
            background: #b89561;
            box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.2);
            border-radius: 24px;
            font-size: 14px;
            font-weight: 200;
            color: #fff;
            padding: 0 22px;
            height: 33px;
            line-height: 33px;
            text-align: center;
            &:link{
              text-decoration: none;
            }
            &:hover{
              text-decoration: none;
              background-color:#c2a77f
            }
          }
          // .timeLogo{
          //   position: relative;
          //   top: 0px;
          // }
          .apply-time{
            font-size: 15px;
            margin-bottom: 15px;
            color: #666;
            @media (max-width: 768px) {
              margin-bottom: 10px;
            }
          }
        }
        .loadMore{
            display: inline-block;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0 40px;
            color: #FFF;
            border: 1px solid #4790E5;
            -webkit-transition: all 0.1s ease 0s;
            -ms-transition: all 0.1s ease 0s;
            -o-transition: all 0.1s ease 0s;
            transition: all 0.1s ease 0s;
            background-image: linear-gradient(-180deg, #4790E5 0%, #52A5F4 100%);
            box-shadow: 0 5px 30px #ccc;
            &:hover,
            &:link{
                text-decoration: none;
            }
            &:active{
                text-decoration: none;
                transform: scale(0.9);
                color: #FFF;
                border: #52A5F4;
                background-image: linear-gradient(-180deg, rgb(64, 135, 216) 0%, rgb(64, 131, 194) 100%);
                box-shadow: 0 5px 30px #52A5F4
            }
        }
    }
</style>
