<template>
    <div class="searchResult" :style="{height:heightBox}">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="请输入搜索关键词" v-model="inputValue" @keyup.enter="searchEnterFun">
            <span class="input-group-addon iconfont icon-sousuo" @click="getResult" ></span>
        </div>
        <div class="searchkey">
            <span @click="searchOne">食品</span>
            <span @click="searchTwo">幼儿园</span>
            <span @click="searchThree">校车</span>
            <span @click="searchFour">义务教育</span>
            <span @click="searchFive">国际学校</span>
            <span @click="searchSix">新学说</span>
        </div>
        <div class="result" v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
            <img :src="item.coverImage+'?x-oss-process=image/resize,m_fixed,h_120,w_170'" alt="">
            <div class="title">
                <h3>{{item.title}}</h3>
                <p class="content">{{item.summary}}</p>
            </div>    
            <p class="time">{{item.createTime|formatDate}}</p>
        </div>
        <div class="loadMore" :class="isMore ? 'show' : 'hide'">
            <a href="javascript:;"  @click="addMore">{{addMoreHtml}}</a>
        </div>
        <p v-html="nullSearch"></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
           inputValue:'',
           list:[],
           nullSearch:'',
           heightBox:'506px',
           addMoreHtml:"加载中...",
           isMore:false,
           pageNum:1,
           pageSize:10,
        }
    },
    filters:{
        formatDate(time,option){
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
        getData(){
            const params = new URLSearchParams();
            params.append('searchKey', localStorage.getItem("searchContent"));
            params.append('pageNum',  this.pageNum);
            params.append('pageSize', this.pageSize);
            this.axios({
                method: 'post',
                url: '/article/find_article_list.do',
                data:params
            }).then((res)=>{
                this.list=this.list.concat(res.data.data.list);
                if(res.data.data.size==0){
                    this.nullSearch="未搜索到结果，请更换搜索关键词！"
                    this.isMore=false
                    this.heightBox='506px'
                }else{
                    this.nullSearch=''
                    this.isMore=true
                    this.heightBox='100%';
                }
                if(res.data.data.size==10){
                    this.addMoreHtml='加载更多'
                }else{
                    this.addMoreHtml='已加载完毕'
                }
            })
        },
        // 加载更多
        addMore(){
            if(this.addMoreHtml=='已加载完毕'){
                return false;
            }else{
                this.pageNum++
                this.getData()
            }
        },
        toDetail(id){
            let routeData =this.$router.resolve({name:"detailNews",params:{id:id}})
            window.open(routeData.href, '_blank');
        },
        // 点击搜索
        getResult(){
            localStorage.setItem("searchContent",this.inputValue)
            this.list=[]
            this.pageNum=1
            this.getData()
        },
        // 回车搜索
        searchEnterFun:function(e){
            var keyCode = window.event? e.keyCode:e.which;
            if(keyCode == 13){
                localStorage.setItem("searchContent",this.inputValue)
                this.list=[]
                this.pageNum=1
				this.getData()
            }
        },
        searchOne(){
            localStorage.setItem("searchContent",'食品')
            this.inputValue='食品'
            this.list=[]
            this.pageNum=1
            this.getData()
        },
        searchTwo(){
            localStorage.setItem("searchContent",'幼儿园')
            this.inputValue='幼儿园'
            this.list=[]
            this.pageNum=1
            this.getData()
        },
        searchThree(){
            localStorage.setItem("searchContent",'校车')
            this.inputValue='校车'
            this.list=[]
            this.pageNum=1
            this.getData()
        },
        searchFour(){
            localStorage.setItem("searchContent",'义务教育')
            this.inputValue='义务教育'
            this.list=[]
            this.pageNum=1
            this.getData()
        },
        searchFive(){
            localStorage.setItem("searchContent",'国际学校')
            this.inputValue='国际学校'
            this.list=[]
            this.pageNum=1
            this.getData()
        },
        searchSix(){
            localStorage.setItem("searchContent",'新学说')
            this.inputValue='新学说'
            this.list=[]
            this.pageNum=1
            this.getData()
        }
    },
    
}
</script>

<style lang="scss">
.searchResult{
    padding-top:52px;
    text-align: center;
    .input-group{
        display: inline-table;
        outline: 0;
        border: none;
        font-size: 18px;
        text-indent: 10px;
        width: 45%;
        height: 50px;
        margin-top: 45px;
        box-shadow: 0px 0px 5px #ccc;
        border-radius: 5px;
        input{
            height: 50px;
            font-size: 16px;
            box-shadow: -1px 0 5px #ddd;
            text-indent: 5px;
        }
        .form-control{
            border:none !important;
        }
        .input-group-addon{
            height: 50px;
            box-shadow: 1px 0px 5px #ddd;
            background:#fff;
            border:none !important;
            font-size: 30px;
            &:hover{
                background: #eee;
            }
        }
        .icon-sousuo:before {
            padding-right: 6px;
        }
    }
    .searchkey{
        text-align: center;
        margin-top:40px;
        span{
            border: 1px solid #eee;
            color: #9f9f9f;
             background-color: #eee;
            padding: 5px 10px;
            border-radius: 5px;
            margin: 10px;
            font-size: 16px;
            display: inline-block;
            cursor: pointer;
            &:hover{
                background:#20528f;
                color:#fff;
            }
        }
    }
    .result{
        box-shadow: 1px 0px 5px #ddd;
        margin-top:50px;
        width: 51%;
        position: relative;
        display: inline-block;
        height: 140px;
        text-align: -webkit-auto;
        cursor: pointer;
        img{
            position: absolute;
            left: 10px;
            width: 170px;
            height: 120px;
            margin-top:10px;
        }
        .title{
            position: absolute;
            top: 0;
            left: 220px;
            .content{
                text-align: -webkit-auto;
                font-size: 16px;
                color:#ccc;
                margin-top:10px;

                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        .time{
            position: absolute;
            right: 40px;
            bottom: 3px;
            color: #ccc;
            font-size: 16px;
        }
    }
    p{
        margin-top: 40px;
        font-size: 16px;
        color: #ccc;
    }
    .loadMore{
        a{
            text-decoration: none;
            color: #FFF;
            border: #52A5F4;
            background-image: -webkit-gradient(linear, left top, left bottom, from(#4087d8), to(#4083c2));
            background-image: linear-gradient(-180deg, #4087d8 0%, #4083c2 100%);
            padding: 5px 10px;
            border-radius: 5px;
            margin-top: 20px;
            display: inline-block;
            &:hover,&:link {
                text-decoration: none;
            }
            &:active {
                text-decoration: none;
                transform: scale(0.9);
                color: #FFF;
                border: #52A5F4;
                background-image: linear-gradient(-180deg, rgb(64, 135, 216) 0%, rgb(64, 131, 194) 100%);
                box-shadow: 0 5px 30px #52A5F4
            }
        }
    }
}
</style>
