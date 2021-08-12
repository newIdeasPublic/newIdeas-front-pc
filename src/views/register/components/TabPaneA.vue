<template>
  <div class="container">
    <div class="reg-type-wrap">
      <div
        class="reg-type-item"
        :class="activeName == 'mobile' ? 'active' : ''"
        @click="selectFun('mobile')">
        <i class="el-icon-mobile-phone icon"></i>
        <span>手机注册</span>
      </div>
      <div
        class="reg-type-item"
        :class="activeName == 'email' ? 'active' : ''"
        @click="selectFun('email')">
        <i class="el-icon-message icon"></i>
        <span>邮箱注册</span>
      </div>
    </div>
    <div class="reg-type-content">
      <el-form
        v-show="activeName == 'mobile'"
        label-position="left"
        label-width="100px"
        status-icon
        :model="ruleForm"
        :rules="rules"
        ref="mobileRuleForm"
      >
        <el-form-item label="手机号" prop="mobile">
          <el-col>
            <el-input v-model="ruleForm.mobile" placeholder="请输入手机号码"></el-input>
          </el-col>
          <el-col class="mobile-text">
            <p>
              请使用本人常用手机号，该手机号将作为账号激活使用<br />
              <span>您一旦选择注册，则自动视为您同意</span
              ><span class="tle">《新思路隐私保护政策与收集规范》</span><br />
              <span>账号已注册，请</span><span class="tle">登录</span>
            </p>
          </el-col>
        </el-form-item>
        <!-- <el-form-item label="验证码" prop="code">
          <el-col :span="13">
            <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="11" style="text-align:right">
            <el-button type="default" class="code-btn" @click="sendCode()">发送验证码</el-button>
          </el-col>
        </el-form-item> -->
        <el-form-item label="账号密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
          <el-input
            type="password"
            v-model="ruleForm.checkPwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="sub-btn"
            type="default"
            @click="submitForm('mobileRuleForm')"
            >注册账号</el-button
          >
        </el-form-item>
      </el-form>
      <el-form
        v-show="activeName == 'email'"
        label-position="left"
        label-width="100px"
        status-icon
        :model="ruleForm"
        :rules="rules"
        ref="emailRuleForm"
      >
        <el-form-item label="邮箱" prop="email">
          <el-col>
            <el-input v-model="ruleForm.email"></el-input>
          </el-col>
          <el-col class="mobile-text">
            <p>
              请使用本人常用邮箱号，该邮箱号将作为账号激活使用<br />
              <span>您一旦选择注册，则自动视为您同意</span
              ><span class="tle">《新思路隐私保护政策与收集规范》</span><br />
              <span>账号已注册，请</span><span class="tle">登录</span>
            </p>
          </el-col>
        </el-form-item>
        <!-- <el-form-item label="验证码" prop="code">
          <el-col :span="13">
            <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="11" style="text-align:right">
            <el-button type="default" class="code-btn" @click="sendCode()">发送验证码</el-button>
          </el-col>
        </el-form-item> -->
        <el-form-item label="账号密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd">
          <el-input
            type="password"
            v-model="ruleForm.checkPwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="sub-btn"
            type="default"
            @click="submitForm('emailRuleForm')"
            >注册账号</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPwd !== '') {
          if (this.activeName == 'mobile') {
            this.$refs.mobileRuleForm.validateField('checkPwd')
          } else {
            this.$refs.emailRuleForm.validateField('checkPwd')
          }
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次密码不一致，请重新确认输入'))
      } else {
        callback()
      }
    }
    return { // 默认第一个选项卡
      activeName: 'mobile',
      ruleForm: {
        mobile: '',
        email: '',
        code: '',
        password: '',
        checkPwd: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {  validator: validatePass, trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    selectFun (str) {
      this.activeName = str
      this.ruleForm = {
        mobile: '',
        email: '',
        code: '',
        password: '',
        checkPwd: ''
      }
      this.resetForm('mobileRuleForm')
      this.resetForm('emailRuleForm')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        let model = this.$refs[formName].model
        if (valid) {
            let obj = {}
            if (this.activeName === 'mobile') {
              obj = {
                mobile: model.mobile,
                password: model.password,
              }
            } else {
              obj = {
                email: model.email,
                password: model.password,
              }
            }
            sessionStorage.setItem('userInfo', JSON.stringify(obj))
            // this.$notify({
            //   title: '成功',
            //   message: '创建成功',
            //   type: 'success',
            //   duration: 2000
            // })
            this.$emit('selRegTabFun', '1')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss">
.el-button:active {
  color: #fa741f;
  border-color: #fa741f;
}
.reg-type-content label {
  font-size: 16px;
  font-weight: bold;
  color: #303133;
}
</style>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .reg-type-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .reg-type-item {
      color: #fee3d2;
      margin-right: 80px;
      cursor: pointer;
    }
    .reg-type-item:hover,
    .reg-type-item.active {
      color: #fa741f;
      i.icon {
        background: #fa741f;
      }
    }
    .reg-type-item i.icon {
      width: 25px;
      height: 25px;
      margin-right: 5px;
      border-radius: 50%;
      background: #fee3d2;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
  }
  .reg-type-content {
    margin-top: 20px;
    text-align: center;
    .mobile-text {
      margin-bottom: -22px;
    }
    .mobile-text p {
      text-align: left;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #909399;
      span {
        color: #fa741f;
      }
      span.tle {
        color: #606266;
      }
    }
  }
  .code-btn {
    width: 80%;
    background: #fa741f;
    color: #ffffff;
    cursor: pointer;
  }
  .sub-btn {
    width: 180px;
    height: 40px;
    background: #fa741f;
    border-radius: 20px;
    color: #ffffff;
    cursor: pointer;
    margin-top: 30px;
  }
}
</style>
