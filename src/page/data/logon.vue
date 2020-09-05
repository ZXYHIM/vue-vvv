<template>
  <div class="logon">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm logonFrom">
      <el-form-item label="登录名称" prop="logonName">
        <el-input v-model.number="ruleForm.logonName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass"> 
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import store from '../../store/index'
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入1登录名称'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
      };
      return {
        ruleForm: {
          pass: '',
          logonName: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          logonName: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        if(formName.logonName === 'admin' && formName.pass === '666666'){
          store.commit('login',{
            account:'admin',
            password:'666666'
          })
          this.$router.push("/index");
          console.log(store.state,'store.state1');
        } else {
          alert('密码或者登录名称错误!');
          return false
        }
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('submit!');
        //     this.$router.push("/index")
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
    }
  }
</script>

<style>
.logon{
  background-color: cornsilk;
  width: 100vw;
  height: 100vh;
}
.logonFrom{
 width: 500px;
 height: 300px;
 position: absolute;
 top:50%;
 left: 50%;
 margin-top: -150px;
 margin-left: -250px;
}
</style>