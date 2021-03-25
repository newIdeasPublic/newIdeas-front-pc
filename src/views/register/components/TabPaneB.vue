<template>
  <div class="container">
    <div class="type-wrap">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="type-content">
            <i class="el-icon-user icon"></i>
            <el-radio v-model="radio" label="1" >个人</el-radio>
            <span>适合个人进行注册。</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="type-content">
            <i class="el-icon-s-shop icon"></i>
            <el-radio v-model="radio" label="2">个体</el-radio>
            <span>适合个体户进行注册。</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="type-content">
            <i class="el-icon-office-building icon"></i>
            <el-radio v-model="radio" label="3">企业</el-radio>
            <span>适合企业/公司及相关分支、品牌、产品与服务。</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="type-content">
            <i class="el-icon-house icon"></i>
            <el-radio v-model="radio" label="4">社会组织</el-radio>
            <span>适合各类公共场馆、公益机构、学校、社团、民间组织等。</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="type-footer">
      <p>注册类型选择完成并认证审核后，将不可更改</p>
      <el-button>下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
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
    span {
      width: 100%;
      height: 110px;
      text-align: left;
      margin-top: 50px;
      font-size: 12px;
      color: #606266;
    }
  }
}
</style>
<style lang="scss">
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
