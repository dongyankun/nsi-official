<template>
<div class="talentBox">
    <img src="http://nsi.oss-cn-zhangjiakou.aliyuncs.com/nsi-pc/banner03.jpg" alt="" class="img-responsive">
    <div class="talent-com">
        <h3 class="title">加入人才库</h3>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item label="最高学历" prop="education">
                <el-select v-model="ruleForm.education" placeholder="请选择学历">
                <el-option label="大专" value="大专"></el-option>
                <el-option label="本科" value="本科"></el-option>
                <el-option label="硕士" value="硕士"></el-option>
                <el-option label="博士" value="博士"></el-option>
                <el-option label="其他" value="其他"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业" prop="major">
                <el-input v-model="ruleForm.major"></el-input>
            </el-form-item>
            <el-form-item label="现单位/学校" prop="company">
                <el-input v-model="ruleForm.company"></el-input>
            </el-form-item>
            <el-form-item label="工作年限" prop="worked">
                <el-input v-model="ruleForm.worked"></el-input>
            </el-form-item>
            <el-form-item label="期望工作地点" prop="spot">
                <el-input v-model="ruleForm.spot"></el-input>
            </el-form-item>
            <el-form-item label="期望职位" prop="job">
                <el-input v-model="ruleForm.job"></el-input>
            </el-form-item>
            <el-form-item label="期望年薪" prop="salary">
                <el-input v-model="ruleForm.salary"></el-input>
            </el-form-item>
            <el-form-item label="入职时间" prop="inTime">
                <el-input v-model="ruleForm.inTime"></el-input>
            </el-form-item>
            <el-form-item label="工作经历" prop="experience">
                <el-input type="textarea" v-model="ruleForm.experience"></el-input>
            </el-form-item>
            <el-form-item label="教育背景" prop="background">
                <el-input type="textarea" v-model="ruleForm.background"></el-input>
            </el-form-item>
            <el-form-item label="培训经历" prop="train">
                <el-input type="textarea" v-model="ruleForm.train"></el-input>
            </el-form-item>
            <el-form-item label="其他要求" prop="other">
                <el-input type="textarea" v-model="ruleForm.other"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          sex: '男',
          phone:'',
          email:'',
          education: '',
          major:'',
          company:'',
          worked:'',
          spot:'',
          job:'',
          salary:'',
          inTime:'',
          experience:'',
          background:'',
          train:'',
          other:''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          sex: [
            { required: true, trigger: 'change' }
          ],
          phone:[
            {required:true,min:11,max:11,message:'手机号格式不正确',trigger:'blur'}
          ],
          email:[
            {required:true,type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          education: [
            { required: true, message: '请选择学历', trigger: 'change' }
          ],
          major:[
            {required: true, message: '请填写专业', trigger: 'blur' }
          ],
          company:[
            {required: true, message: '请填写工作单位', trigger: 'blur' }
          ],
          worked:[
            {required: true, message: '请填写工作年限', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.ruleForm)
            let sendData= new URLSearchParams();
            sendData.append('name',this.ruleForm.name)
            sendData.append('sex',this.ruleForm.sex)
            sendData.append('phone',this.ruleForm.phone)
            sendData.append('mail',this.ruleForm.email)
            sendData.append('education',this.ruleForm.education)
            sendData.append('major',this.ruleForm.major)
            sendData.append('workPlace',this.ruleForm.company)
            sendData.append('workYear',this.ruleForm.worked)

            sendData.append('isPublic',1)
            sendData.append('expectWorkPlace',this.ruleForm.spot)
            sendData.append('expectWorkPosition',this.ruleForm.job)
            sendData.append('expectSalary',this.ruleForm.salary)
            sendData.append('entryTime',this.ruleForm.inTime)
            sendData.append('workExperience',this.ruleForm.experience)
            sendData.append('educationBackground',this.ruleForm.background)
            sendData.append('trainingBackground',this.ruleForm.train)
            sendData.append('other',this.ruleForm.other)

            this.axios({
                method:"post",
                url:"/manager/talent/add.do",
                data:sendData
            }).then((res)=>{
                this.$notify({
                title: '提交成功',
                message: '您的信息将被展示在人才库',
                offset: 100,
                type: 'success',
                onClose:function(){
                    window.location.reload()
                }
                })
            })

            // alert('submit!');
          } else {
            console.log('请填写必填项');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss">
    .talent-com{
        padding-right: 30px;
        .title{
            padding: 10px 30px 20px;
            font-family: PingFangSC-Semibold;
            font-size: 30px;
            color: #c8c8c8;
            letter-spacing: 5px;
            position: relative;
        }
    }
</style>
