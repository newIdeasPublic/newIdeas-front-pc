<template>
  <div class="container">
    <div class="type-wrap">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="type-content" :class="typeRadio == '1'?'is-checked':''">
            <i class="el-icon-user icon"></i>
            <el-radio v-model="typeRadio" label="1" >个人</el-radio>
            <span class="intro">适合个人进行注册。</span>
            <div class="type-detail-wrap">
              <div>注册所需资料</div>
              <ul>
                <li>身份证</li>
                <li>户口本</li>
                <li>单身证</li>
                <li>出生证</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="type-content" :class="typeRadio == '2'?'is-checked':''">
            <i class="el-icon-s-shop icon"></i>
            <el-radio v-model="typeRadio" label="2">个体</el-radio>
            <span class="intro">适合个体户进行注册。</span>
            <div class="type-detail-wrap">
              <div>注册所需资料</div>
              <ul>
                <li>证件信息</li>
                <li>企业名称</li>
                <li>企业营业执照扫描件</li>
                <li>证明你是你的授权书</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="type-content" :class="typeRadio == '3'?'is-checked':''">
            <i class="el-icon-office-building icon"></i>
            <el-radio v-model="typeRadio" label="3">企业</el-radio>
            <span class="intro">适合企业/公司及相关分支、品牌、产品与服务。</span>
            <div class="type-detail-wrap">
              <div>注册所需资料</div>
              <ul>
                <li>证件信息</li>
                <li>企业名称</li>
                <li>企业营业执照扫描件</li>
                <li>证明你是你的授权书</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="type-content" :class="typeRadio == '4'?'is-checked':''">
            <i class="el-icon-house icon"></i>
            <el-radio v-model="typeRadio" label="4">社会组织</el-radio>
            <span class="intro">适合各类公共场馆、公益机构、学校、社团、民间组织等。</span>
            <div class="type-detail-wrap" style="border-right:none">
              <div>注册所需资料</div>
              <ul>
                <li>证件信息</li>
                <li>企业名称</li>
                <li>企业营业执照扫描件</li>
                <li>证明你是你的授权书</li>
              </ul>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="type-footer">
      <p>注册类型选择完成并认证审核后，将不可更改</p>
      <el-button class="next-btn" @click="nextFun">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      typeRadio: '1'
    }
  },
  methods: {
    nextFun () {
      let obj = Object.assign({}, JSON.parse(sessionStorage.getItem('userInfo')), {scope: this.typeRadio})
      sessionStorage.setItem('userInfo', JSON.stringify(obj))
      this.$emit('selRegTabFun', '2')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 160%;
  margin-left: -30%;
  .type-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    &.is-checked {
      i.icon {
        background: #FA741F;
      }
    }
    i.icon {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #FEE3D2;
      color: #fff;
      margin: 10px;
      font-size: 40px;
      line-height: 56px;
      text-align: center;
    }
    i.icon.is-checked {
      background: #FA741F;
    }
    .intro {
      width: 82%;
      height: 110px;
      text-align: left;
      margin-top: 50px;
      font-size: 12px;
      color: #606266;
    }
    .type-detail-wrap {
      width: 100%;
      text-align: left;
      font-size: 12px;
      font-weight: 500;
      color: #606266;
      border-right: 1px solid #DCDFE6;
      margin-left: 38px;
      ul {margin-left: -22px;}
    }
  }
  .type-footer {
    p {
      margin-top: 30px;
    }
    .next-btn {
      width: 180px;
      height: 40px;
      background: #FA741F;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 500;
      color: #FFFFFF;
      margin-top: 20px;
    }
  }
}
.type-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<style lang="scss">
label.el-radio {
  margin-right: 0;
}
.el-radio__input,.el-radio__label {
  font-size: 16px;
  font-weight: 600;
}
/* 选中后的字体颜色 */
.el-radio__input.is-checked + .el-radio__label {
  color: #FA741F;
}
/* 选中后小圆点的颜色 */
.el-radio__input.is-checked .el-radio__inner {
  background: #FA741F;
  border-color: #FA741F;
}

</style>
