<template>
    <div class="newsInfo-M-com">
        <div class="newsInfoBox" v-for="(news,index) in loadNews" :key="index">
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
        loadNews:{},
        required: true
    },
    data(){
        return{
            recentNews:[]
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
        },
    },
    methods:{
        toDetail(id){
            // console.log(id)
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        }
    },
}
</script>

<style lang="scss">
  @import '../../assets/style/news/commonM.scss';
</style>
