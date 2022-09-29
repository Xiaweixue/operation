<template>
  <div>
    <el-card class="login">
      <h2 class="h2">系统登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model.trim="ruleForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model.trim="ruleForm.password"
            placeholder="请输入密码"
            autocomplete="off"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="code">
          <el-input
            v-model="ruleForm.code"
            prefix-icon="lj-icon-yanzhengma"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
            @keyup.enter.native="submit"
            style="float: left; width: 240px"
            placeholder="请填写验证码"
          ></el-input>
          <div style="width: 110px; float: right; height: 40px">
            <img :src="this.img" alt="" @click="acquireVerification" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="log" @click="login('ruleForm')"
            >登录</el-button
          >
          <el-button class="log" @click="reset('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import http from '../../api/login'
export default {
  name: 'login',
  data() {
    return {
      img: '',
      ruleForm: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return
        this.SelChrGate()
        this.$refs[formName].resetFields()
      })
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    async SelChrGate() {
      try {
        const response = await http.getLogin(this.ruleForm)
        if (response.data.code === 200) {
          sessionStorage.setItem('token', response.data.token)
          this.$router.push('/home')
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
        } else if (response.data.code === 500) {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      } catch (e) {
        console.log(e.msg)
      }
    },
    async acquireVerification() {
      try {
        const response = await http.verification()
        this.img = window.URL.createObjectURL(response.data)
      } catch (e) {
        console.log(e.msg)
      }
    }
  },
  created() {
    this.acquireVerification()
  }
}
</script>
<style lang="scss">
.login {
  width: 450px;
  // height: 300px;
  margin-left: 750px;
  margin-top: 280px;
  padding: 20px;
  box-sizing: border-box;

  .h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .log {
    width: 150px;
    margin-right: 20px;
    margin-left: 15px;
  }
}
</style>
