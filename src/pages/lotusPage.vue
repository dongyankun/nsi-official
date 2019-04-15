<template>
    <div class="lotusPage">
          <lotus-sub class="showInMobile"/>
          <!-- <h1>这是新荷页</h1> -->
          <div class="text-center mt30">
            <img src="https://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-official/image/common/404.jpg" alt="" class="img-responsive">
          </div>
    </div>
</template>

<script>
import lotusSub from '../components/lotus/lotus-M'
export default {
  components:{
    lotusSub
  }
}
</script>

<style lang="scss">
  .lotusPage{
    .img-responsive{
      display: inline-block;
    }
    .mt30{
      margin-top: 30px;
    }
  }
</style>
