<template>
    <div class="newsInfo-M-com">
        <!-- <div class="newsInfoBox">
            <img src="../../assets/img/index/small001.jpg" width="150" alt="">
            <h4>这是标题这是标题这是标题这是标题这是标题</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae at laborum ipsam, quos ratione adipisci accusamus harum dolor illum cumque tenetur minima distinctio fuga molestias dolore fugiat dolorum numquam.</span>
        </div> -->
        <div class="newsInfoBox" v-for="(news,index) in showFourNews" :key="index" v-if="index<5">
            <div class="row">
                <div class="col-xs-5">
                    <img :src="news.coverImage" alt="" class="img-responsive" @click="toDetail(news.id)">
                </div>
                <div class="col-xs-7 pl0 newsIntro">
                    <h5 @click="toDetail(news.id)">{{news.title}}</h5>
                    <p class="newsInfoBox-time" >{{news.summary}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        showFourNews:{},
        required: true
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
    },
    methods:{
        toDetail(id){
            // console.log(id)
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        }
    }
}
</script>

<style lang="scss">
    .newsInfo-M-com{
        .pl0{
            padding-left: 0;
        }
        .newsInfoBox{
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid rgb(238, 238, 238);
            h5{
                font-weight: 400;
                font-size: 16px;
                line-height: 1.3 !important;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                min-height: 40px;
                max-height: 40px;
                margin-top: 0;
                margin-bottom: 5px;
                color: #07111B;
            }
            img{
                border-radius: 2px;
                vertical-align: text-bottom;
            }
            .newsIntro{
                .newsInfoBox-time{
                    margin-bottom: 0;
                    padding-bottom: 8px;
                    // border-bottom: 1px solid #ddd;
                    color: #93999F;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    min-height: 40px;
                    max-height: 40px;
                }
            }
        }
    }
</style>
