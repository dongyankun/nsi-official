<template>
    <div class="applyContainer">
        <span class="iconfont icon-hao close" @click="close"></span>
        <div class="title">
            <p class="text-center"><span class="iconfont icon-huangguan vipLogo"></span></p>
            <h5 class="text-center vipTitle">加入NSI会员 享专属特权</h5>
        </div>
        <div class="applyForm" v-loading="loading">
            <input ref="userName" v-model="userInput.name" type="text" placeholder="姓名" class="userInput">
            <input ref="school" v-model="userInput.school" type="text" placeholder="机构/学校" class="userInput">
            <input ref="phone" v-model="userInput.phone" type="text" placeholder="电话" class="userInput">
            <input ref="job" v-model="userInput.job" type="text" placeholder="职务" class="userInput">
            <input ref="weiChat" v-model="userInput.weiChat" type="text" placeholder="微信号" class="userInput">
            <input ref="userMail" v-model="userInput.mail" type="text" placeholder="邮箱" class="userInput">
            <label for="vip01"><input type="radio" id="vip01" name="type" value="注册会员" checked> 注册会员</label>
            <label for="vip02"><input type="radio" id="vip02" name="type" value="个人会员" > 个人会员</label>
            <label for="vip03"><input type="radio" id="vip03" name="type" value="企业会员" > 企业会员</label>
            <label for="vip04"><input type="radio" id="vip04" name="type" value="企业高级会员" > 企业高级会员</label>
            <div class="btnsContainer">
                <a href="javascript:;" class="rightBtn btnContainer" :class="{notAllow:isAllow}" @click="applyForm">立即提交</a>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            isAllow:true,
            sendFlag:false,
            loading: false,
            userInput:{
                name:"",
                school:"",
                phone:"",
                job:"",
                weiChat:"",
                mail:"",
                type:""
            },
        }
    },
    methods:{
        close(){
            this.$emit('isClose',false)
        },
        applyForm(){
          if(this.sendFlag){
                this.loading=true
                let userName=this.$refs.userName.value
                let school=this.$refs.school.value
                let phone=this.$refs.phone.value
                let job=this.$refs.job.value
                let weiChat=this.$refs.weiChat.value
                let userMail=this.$refs.userMail.value
                let vipType=document.getElementsByName("type")
                for(var i=0; i<vipType.length; i ++){
                    if(vipType[i].checked){
                        // alert(obj[i].value);
                        this.userInput.type=vipType[i].value
                    }
                }
                const data = new URLSearchParams();
                data.append('name', userName);
                data.append('institution', school);
                data.append('phone', phone);
                data.append('duty', job);
                data.append('wechatId', weiChat);
                data.append('mail', userMail);
                data.append('memberType', this.userInput.type);

                // console.log(userName,school,phone,job,weiChat,userName,this.userInput.type)
                this.axios({
                    method:"post",
                    url:"/members/add_members.do",
                    data:data
                }).then((res)=>{
                    this.close()
                    this.loading=false
                    this.isShow=false
                    const h = this.$createElement;
                        this.$notify({
                        title: '提交成功',
                        type: 'success',
                        message: h('span', { style: 'color: #c1a773'}, '稍后会有新学说工作人员向您取得联系，感谢您的信任与支持'),
                        offset: 150,
                        duration: 5000
                    });
                })
          }
      },
    },
    updated(){
        if(this.userInput.name==""||this.userInput.phone==""||this.userInput.mail==""||this.userInput.job==""||this.userInput.weiChat==""||this.userInput.school==""){
            this.isAllow=true
            this.sendFlag=false
        }else{
            this.isAllow=false
            this.sendFlag=true
        }
    }
}
</script>

<style lang="scss">
    .applyContainer{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index:999;
        -webkit-animation-duration: .3s;
        animation-duration: .3s;
        // background-image: url('../../assets/img/vip/vipBg.jpg');
        // background-position: center 0;
        // background-size: cover;
        background-color: rgba(0,0,0,.7);
        .close{
            position: absolute;
            font-size: 25px;
            color: #FFF;
            top: 15px;
            right: 15px;
            transform: rotateZ(45deg)
        }
        .title{
            margin-top: 20px;
            text-shadow: 0 4px 8px rgba(7, 17, 27, 0.4);
            .vipLogo{
                color: #d9bc86;
                font-size: 25px;
            }
            .vipTitle{
                color: #d9bc86;
                letter-spacing: 1px;
                font-weight: 700;
                font-size: 20px;
            }
        }
        .notAllow{
            opacity: .5;
            cursor: not-allowed
        }
        .applyForm{
            background: #FFF;
            width: 90%;
            padding: 30px 15px 15px;
            // position: absolute;
            margin: 30px auto 0;
            border-radius: 4px;
            .userInput{
                width: 100%;
                border: none;
                border-bottom: 1px solid #ccc;
                margin-bottom: 20px;
                font-size: 15px;
                color: #c1a773;
                padding-left: 10px;
                padding-bottom: 10px;
                outline: none;
                @media (max-width: 376px) {
                    margin-bottom: 20px;
                }
            }
            label{
                color: rgb(122, 122, 122);
                margin-right: 25px;
                margin-bottom: 10px;
                font-weight: 400;
                font-size: 15px;
            }
        }
        .btnsContainer{
            margin-top: 10px;
            margin-bottom: 10px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            width: 100%;
            a{
                display: block;
                width: 90%;
                margin: 0 auto;
                font-size: 18px;
                background-color: #203671;
                color: #f3ce89;
                border-radius: 25px;
                // box-shadow: 0 5px 10px #bababa;
                span{
                    font-size: 14px;
                    color:#c1a773;
                }
            }
        }
    }
</style>
