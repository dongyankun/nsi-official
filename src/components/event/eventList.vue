<template>
    <div class="eventList-com">
        <div class="container">
            <h2 class="title">热门活动<span class="hot">HOT</span></h2>
            <div class="row">
                <div class="col-md-6 mb15" v-for="(list,index) in eventList">
                    <a class="event-list" href="javascript:;" @click="getDetail">
                        <div class="event-box" :style="{'background-image':'url('+list.imgSrc+')'}">
                            <h3 class="event-box-title" :title="list.title">{{list.title}}</h3>
                        </div>
                    </a>
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
            addMoreHtml:"加载更多",
            eventList:[
                {
                    title:"2018国际学校发展大会",
                    imgSrc:require("../../assets/img/event/eventBanner01.jpg")
                },
                {
                    title:"2017国际学校发展大会",
                    imgSrc:require("../../assets/img/event/eventBanner02.jpg")
                },
                {
                    title:"2016国际学校发展大会",
                    imgSrc:require("../../assets/img/event/eventBanner03.jpg")
                },
                {
                    title:"2015国际学校发展大会",
                    imgSrc:require("../../assets/img/event/eventBanner04.jpg")
                }
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
    }
}
</script>

<style lang="scss">
    .eventList-com{
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
        .mt20{
            margin-top: 20px;
        }
        background: #fafafa;
        margin-bottom: -50px;
        padding: 50px 0;
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
            .hot{
                position: absolute;
                right:-12px;
                top: 48px;
                font-size: 20px;
                color: #e4e4e4;
                letter-spacing: 0;
                line-height: 20px;
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
                height: 300px;
                background-size: cover;
                background-position: center;
                border-radius: 2px;
            &::before{
                    display: block;
                    content: "";
                    width: 100%;
                    height: 300px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: rgba(0, 0, 0, 0);
                    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.05) 2%, rgba(0, 0, 0, 0.3) 100%);
                    @include transitionAnimate;
                }
            &:hover::before{
                    opacity: .2;
                }
            }
            .event-box-title{
                    position: absolute;
                    padding-right: 50px;
                    left: 30px;
                    bottom: 30px;
                    margin-top: 10px;
                    font-family: PingFangSC-Semibold;
                    font-size: 20px;
                    color: #FFF;
                    font-weight: 700;
                    font-size: 28px;
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
                    @include transitionAnimate;
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
