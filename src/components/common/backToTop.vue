<template>
  <div class="backtotop-com">
      <a href="javascript:;" @click="backTop(step)" v-show="isShow" id="back" class="animated">
          <i class="iconfont icon-fanhuidingbu3"></i>
      </a>
  </div>
</template>

<script>
export default {
  props:{
    step:{
      type:Number,
      default:50
    }
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
      backTop(i){
        document.documentElement.scrollTop-=i;
        if (document.documentElement.scrollTop>0) {
          var timer=setTimeout(()=>this.backTop(i),5);
        }else {
          clearTimeout(timer);
        }
      }
    },
  created(){
    var vm=this,
        back=document.querySelector("#back")
    window.onscroll=function(){
      if(document.documentElement.scrollTop>300){
        vm.isShow=true
      }else{
        vm.isShow=false
      }
    }
  }
}
</script>

<style lang="scss">
    .backtotop-com{
      z-index: 9999;
      @mixin transitionAnimate{
          -webkit-transition: all 0.3s ease 0s;
          -ms-transition: all 0.3s ease 0s;
          -o-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
      }
       position: fixed;
       right: 40px;
       bottom: 40px;
       a{
          display: inline-block;
          width: 50px;
          height: 50px;
          text-align: center;
          line-height: 50px;
          background-color: rgb(255, 255, 255);
          border-radius: 8px;
          color: rgb(201, 214, 222);
          box-shadow: rgba(15, 37, 64, 0.2) 0px 5px 15px 0px;
          @include transitionAnimate();
          i{
            font-size: 33px;
            font-weight: 700;
          }
       }
       a:hover,a:link{
         text-decoration: none;
       }
       a:hover{
        background-color: rgb(230, 230, 230);
        color: rgb(169, 177, 182);
       }
       .show{
         display: none;
       }
    }
</style>
