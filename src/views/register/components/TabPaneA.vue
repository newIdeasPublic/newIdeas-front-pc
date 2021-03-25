<template>
  <div class="container">
    <div class="reg-type-wrap">
      <div class="reg-type-item" :class="activeName=='phone'?'active':''" @click="activeName='phone'">
        <i class="el-icon-mobile-phone icon"></i>
        <span>手机注册</span>
      </div>
      <div class="reg-type-item" :class="activeName=='email'?'active':''"  @click="activeName='email'">
        <i class="el-icon-message icon"></i>
        <span>邮箱注册</span>
      </div>
    </div>
    <div class="reg-type-content">
      <el-form v-show="activeName=='phone'" label-position="left" label-width="100px" status-icon :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="手机号" prop="phone">
          <el-col>
            <el-input v-model="ruleForm.phone"></el-input>
          </el-col>
          <el-col class="phone-text">
            <p>请使用本人常用手机号，该手机号将作为账号激活使用<br />
            <span>您一旦选择注册，则自动视为您同意</span><span class="tle">《新思路隐私保护政策与收集规范》</span><br />
            <span>账号已注册，请</span><span class="tle">登录</span></p>
          </el-col>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-col :span="13">
            <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="11" style="text-align:right">
            <el-button type="default" class="code-btn" @click="sendCode()">发送验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="账号密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="sub-btn" type="default" @click="submitForm('ruleForm')">注册账号</el-button>
        </el-form-item>
      </el-form>
      <el-form v-show="activeName=='email'" label-position="left" label-width="100px" status-icon :model="ruleForm" :rules="rules" ref="ruleForm" >
        <el-form-item label="邮箱" prop="email">
          <el-col>
            <el-input v-model="ruleForm.email"></el-input>
          </el-col>
          <el-col class="phone-text">
            <p>请使用本人常用邮箱号，该邮箱号将作为账号激活使用<br />
            <span>您一旦选择注册，则自动视为您同意</span><span class="tle">《新思路隐私保护政策与收集规范》</span><br />
            <span>账号已注册，请</span><span class="tle">登录</span></p>
          </el-col>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-col :span="13">
            <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          </el-col>
          <el-col :span="11" style="text-align:right">
            <el-button type="default" class="code-btn" @click="sendCode()">发送验证码</el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="账号密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="sub-btn" type="default" @click="submitForm('ruleForm')">注册账号</el-button>
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
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次密码不一致，请重新确认输入'))
      } else {
        callback()
      }
    }
    return { // 默认第一个选项卡
      activeName: 'phone',
      ruleForm: {
        phone: '',
        email: '',
        code: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.el-button:active {
  color: #FA741F;
  border-color: #FA741F;
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
      color: #FEE3D2;
      margin-right: 80px;
      cursor: pointer;
    }
    .reg-type-item:hover, .reg-type-item.active {
      color: #FA741F;
      i.icon {
        background: #FA741F;
      }
    }
    .reg-type-item i.icon {
      width: 25px;
      height: 25px;
      margin-right: 5px;
      border-radius: 50%;
      background: #FEE3D2;
      text-align: center;
      line-height: 25PX;
      color: #fff;
    }
  }
  .reg-type-content {
    margin-top: 20px;
    .phone-text {margin-bottom: -22px;}
    .phone-text p {
      text-align: left;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #909399;
      span {color: #FA741F;}
      span.tle {color: #606266;}
    }
  }
  .code-btn {
    width: 80%;
    background: #FA741F;
    color: #FFFFFF;
    cursor: pointer;
  }
  .sub-btn {
    width: 180px;
    height: 40px;
    background: #FA741F;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 30px;
  }
}
</style>
