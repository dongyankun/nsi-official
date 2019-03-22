<template>
    <div class="consuleMain">
        <div class="banner">
            <img src="../../assets/img/consulting/insight.jpg" alt="">
        </div>  
        <div class="item">
            <el-row :gutter="20">
              <el-col :span="24" v-for="(o, index) in 6" :key="o" style="margin-bottom:20px;">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/img/consulting/insightList.jpg" class="insightImage">
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
    </div>
</template>

<script>

export default {
    methods:{
        
    },
    mounted(){
        
    }
}
</script>

<style lang="scss">
    @import "../../assets/style/consult/main.scss";
</style>
