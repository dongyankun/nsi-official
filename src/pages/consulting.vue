<template>
    <div>
        <div class="consulting-com">
            <connectUs></connectUs>
            <div>
                <img src="../assets/img/consulting/pcConsult.jpg" alt="">
                <div class="item" style="width:1070px;margin:30px auto;">
                    <el-row :gutter="20">
                      <el-col :span="8" v-for="(o, index) in 6" :key="o" style="margin-bottom:20px;">
                        <el-card :body-style="{ padding: '0px' }">
                          <img src="../assets/img/consulting/insightList.jpg" class="insightImage">
                          <div style="padding: 7px;">
                            <h4 style="text-align:left">第三只眼观校：</h4>
                            <p style="text-align:left">鼎石的市场传播到底牛在哪里？</p>
                            <div class="bottom clearfix">
                                <p style="color:#999;text-align:left">鼎石的市场传播到底牛在哪里？鼎石的市场传播到底牛在哪里？鼎石的市场传播到底牛在哪里？</p>
                              <el-button style="float:right" type="text" class="button">查看更多</el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                </div>
                <img src="../assets/img/consulting/pcConsult2.jpg" alt="">
            </div>
            <!-- <div class="banner">
                <img src="../assets/img/consulting/banner.jpg" alt="">
            </div>
            <div class="content text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <img src="../assets/img/consulting/conInfo01.jpg" alt="">
                        </div>
                        <div class="col-md-12">
                            <img src="../assets/img/consulting/conInfo02.jpg" alt="">
                        </div>
                        <div class="col-md-12">
                            <img src="../assets/img/consulting/conInfo03.jpg" alt="">
                        </div>
                        <div class="col-md-12">
                            <img src="../assets/img/consulting/conInfo04.jpg" alt="">
                        </div>
                        <div class="col-md-12">
                            <img src="../assets/img/consulting/conInfo05.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <consultMob v-show="mobHtml"></consultMob>
    </div>
</template>

<script>
import connectUs from '../components/consulting/connectUs.vue'
import consultMob from '../components/consulting/consultMob.vue'
export default {
    data() {
        return {
            mobHtml:false,
        }
    },
    components: {
        consultMob,connectUs
    },
    created(){
        if(window.innerWidth<769){
            this.mobHtml=true
        }
    }
}
</script>

<style lang="scss">
    .consulting-com{
        @media (max-width: 768px) {
            padding-top: 0;
            dispaly:none;
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
            padding:10px 0 0px 0;
        }
        .consultListActive{
            color:rgb(255, 208, 75);
        }
    }
</style>
