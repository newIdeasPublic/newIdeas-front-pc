<template>
  <div class="container">
    <div class="tips">
      请务必真实填写您的信息，如填报系统信息将会被禁止注册！
    </div>
    <div class="basic-info-form">
      <div class="title"><span class="dot"></span>基本信息</div>
      <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
        <el-form-item label="账号类型" prop="type" class="reg-type-item">
          <!-- <el-input v-model="ruleForm.name"></el-input> -->
          <i class="el-icon-mobile-phone icon"></i>
          <span>企业</span>
        </el-form-item>
        <el-form-item label="联系人" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系电话" prop="name">
          <!-- <el-input v-model="ruleForm.name"></el-input> -->
                 <el-input
            placeholder="请输入联系电话"
            v-model="ruleForm.number"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="+86" value="1"></el-option>
              <el-option label="+87" value="2"></el-option>
              <el-option label="+89" value="3"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="联系微信" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系人介绍" prop="textarea">
          <!-- <el-input v-model="ruleForm.name"></el-input> -->
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 8}"
            placeholder="请输入内容"
            v-model="ruleForm.textarea"
            maxlength="400"
            show-word-limit>
          </el-input>
        </el-form-item>
        <el-form-item label="备注" prop="textarea">
          <!-- <el-input v-model="ruleForm.name"></el-input> -->
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 8}"
            placeholder="请输入备注"
            v-model="ruleForm.textarea"
            maxlength="400"
            show-word-limit>
          </el-input>
        </el-form-item>
      </el-form>

      <div class="title"><span class="dot"></span>企业信息</div>
      <el-form label-position="left" :model="ocForm" :rules="ocRules" ref="ocForm" label-width="100px" >
          <el-form-item label="企业名称" prop="name">
          <el-input v-model="ocForm.name" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="企业地址" prop="address">
            <el-input v-model="ocForm.address"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码" prop="postcode">
            <el-input v-model="ocForm.postcode"></el-input>
          </el-form-item>
          <el-form-item label="营业执照" prop="name">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">请上传营业执照，确保信息清晰可见，最大不超过6M，审核通过后，将无法修改</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="个人证明" prop="name">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">请上传证明文件，确保信息清晰可见，最大不查过6M <a href="#">证明模板下载</a></div>
            </el-upload>
          </el-form-item>
      </el-form>
      <div class="opera-wrap">
        <el-radio v-model="radio" label="1">同意并遵守《新思路公益社区用户协议》</el-radio>
        <el-button class="sub-btn" type="default" @click="submitForm('ocForm')">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        type: '',
        name: '',
        sex: '',
        select: '',
        textarea: '',
        textarea1: ''
      },
      ocForm: {
        name: '',
        address: '',
        postcode: '',
        license: '',
        prove: ''
      },
      rules: {
        type: [{ required: true }],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]
      },
      ocRules: {
        name: [
          { required: true, message: '请输入企业名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入企业地址', trigger: 'blur' },
        ],
        postcode: [
          { required: true, message: '请输入邮政编码', trigger: 'blur' },
        ],
      },
      accountType: '1'
    }
  },
  mounted () {
    this.accountType = JSON.parse(sessionStorage.getItem('userInfo'))['scope']
    console.log('131313', this.accountType)
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .opera-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
.tips {
  width: 100%;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #909399;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(48, 49, 51, 0.3);
}
.basic-info-form {
  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 26px;
    font-size: 18px;
    font-weight: bold;
    line-height: 12px;
    color: #FA741F;
    margin: 20px 0;
    .dot {
      display: inline-block;
      width: 15px;
      height: 15px;
      background: #FA741F;
      border: 1px solid #FA741F;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

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
.reg-type-item i.icon {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 50%;
  background: #fa741f;
  text-align: center;
  line-height: 25px;
  color: #fff;
}
</style>
