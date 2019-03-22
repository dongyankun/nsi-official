<template>
    <div>
        <el-dialog
          title="咨询反馈"
          :visible.sync="feedback"
          width="40%">
            <el-form :model="feedbackFrom" :rules="rules" ref="feedbackFrom" label-width="70px" class="demo-ruleForm">
                <el-form-item label="姓名">
                    <el-input v-model="feedbackFrom.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                    <el-input v-model="feedbackFrom.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="feedbackFrom.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地区">
                    <el-input v-model="feedbackFrom.area" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="feedbackFrom.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="公司">
                    <el-input v-model="feedbackFrom.company" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="留言" prop="words">
                    <el-input type="textarea" v-model="feedbackFrom.words" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <button @click="submitData" class='feedbackButton'>提交</button>
        </el-dialog>
        <div class="rightConnect">
            <ul>
                <li><img src="../../assets/img/consulting/rightConnect1.png"></li>
                <li><a href="tel://13800000000"><img src="../../assets/img/consulting/rightConnect2.png"></a></li>
                <li @click="pathTo"><img src="../../assets/img/consulting/rightConnect3.png"></li>
                <li @click="toTop"><img style="width:30px;height:25px;" src="../../assets/img/consulting/rightConnect4.png"></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
     data(){
        return{
            feedback:false,
            feedbackFrom:{
                name:'',
                phone:'',
                email:'',
                area:'',
                address:'',
                company:'',
                words:''
            },
            rules: {
              
              phone: [
                { required: true, message: '请输入手机号码', trigger: 'blur' }
              ],
              email: [
                { required: true, message: '请输入邮箱', trigger: 'blur' }
              ],
              words: [
                { required: true, message: '请输入留言', trigger: 'blur' }
              ],
            }
        }
    },
    methods:{
       toTop(){
            window.scrollTo(0,0);
       },
       submitData(){
            this.feedback=false
            this.$message({
              message: '上传成功',
              type: 'sucess'
            });
       },
       pathTo(){
            this.feedback=true
            // let nowRouter=this.$route.path
            // let pathArr=['/consulting/consultOne','/consulting/consultTwo','/consulting/consultThree','/consulting/consultFour','/consulting/consultFive']
            // let pathIndex
            // pathArr.forEach((data,index)=>{
            //     if(data==nowRouter){
            //         pathIndex=index
            //     }
            // })
            // if(pathIndex==4){pathIndex=0}else{pathIndex++}
            // this.$router.push({path:pathArr[pathIndex]});
       }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss">
    .feedbackButton{
        outline:none;
        border:0;
        color:#fff;
        margin-left:25%;
        padding:5px 0;
        font-size:16px;
        width: 50%;
        background:#20528f;
    }
    .rightConnect{
        position:fixed;
        top:50%;
        right:10px;
        z-index:1000;
        ul,li{
            list-style:none;
            margin: 0;
            padding: 0;
        }
        ul{
            width: 50px;
            li{
                height: 50px;
                background:#20528f;
                opacity:.8;
                padding:10px;
                border-radius:5px;
                margin:10px 0 0 0;
                img{
                    width: 30px;
                    height: 30px;
                }
            }
        }

    }
</style>
