<template>
    <div class="recentEvent-m-com">
        <div class="row">
            <div class="col-xs-6" v-for="(event,index) in eventInfo" :class="'eventBox'+index" :key="index">
                <div class="eventBox" :style="{'background-image':'url('+event.content05+')'}" @click="toDetail(event.content07)">
                    <div class="content-bg">
                        <p class="eventName">{{event.content01}}</p>
                        <p class="time"><span>{{event.content03|formatStr}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        eventInfo:{},
        required: true
    },
    filters:{
        formatStr(str){
           return str != "null" ? str : ""
        }
    },
    methods:{
        toDetail(url){
            window.open(url,"_blank")
        }
    }
}
</script>

<style lang="scss">
    .recentEvent-m-com{
        padding-top: 10px;
        .eventBox{
            width: 100%;
            height: 120px;
            border-radius: 4px;
            overflow: hidden;
            background-position: center center;
            background-size: 100% 100%;
            margin-bottom: 10px;
            position: relative;
            .content-bg{
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.2);
                padding: 15px;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-pack: center!important;
                justify-content: center!important;
                -ms-flex-align: center!important;
                align-items: center !important;
                -ms-flex-direction: column;
                flex-direction: column;
                .eventName{
                    color: #FFF;
                    text-shadow: 0 2px 4px rgba(7, 17, 27, 0.5);
                    display: inline-block;
                    margin-bottom: 0;
                    padding-bottom: 5px;
                    border-bottom: 2px solid #f8f8f8;
                    font-size: 16px;
                }
                .time{
                    margin-top: 5px;
                }
                span{
                    color: #FFF;
                    font-size: 13px;
                }
            }
        }
        .eventBox0,.eventBox2{
            padding-right: 7px;
        }
        .eventBox1,.eventBox3{
            padding-left: 7px;
        }
    }
</style>
