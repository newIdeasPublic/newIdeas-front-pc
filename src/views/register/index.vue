<template>
  <div class="reg-container">
    <div class="reg-step-wrap">
      <div class="step-item" :class="activeName=='first'?'active':''" @click="activeName='first'">账户注册</div>
      <div class="step-item" :class="activeName=='second'?'active':''" @click="activeName='second'">账户类型</div>
      <div class="step-item" :class="activeName=='three'?'active':''" @click="activeName='three'">详细信息</div>
    </div>
    <div>
      <TabPaneA v-show="activeName=='first'" @selRegTabFun="selRegTabFun($event)"></TabPaneA>
      <TabPaneB v-show="activeName=='second'" @selRegTabFun="selRegTabFun($event)"></TabPaneB>
      <TabPaneC v-show="activeName=='three'"></TabPaneC>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reg-container {
  min-height: 330px;
  width: 600px;
  margin: 50px auto;
  .reg-step-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .step-item {
      width: 96px;
      height: 35px;
      font-size: 24px;
      font-family: Source Han Serif SC;
      font-weight: bold;
      line-height: 42px;
      color: #FEE3D2;
      padding-bottom: 3px;
      cursor: pointer;
    }
    .step-item:hover, .step-item.active {
      color: #FA741F;
      border-bottom: 3px solid #FA741F;
    }
  }

}
</style>
<style lang="scss">

</style>
<script>
import TabPaneA from './components/TabPaneA'
import TabPaneB from './components/TabPaneB'
import TabPaneC from './components/TabPaneC'
export default {
  components: {
    TabPaneA,
    TabPaneB,
    TabPaneC
  },
  data () {
    return { // 默认第一个选项卡
      activeName: 'first'
    }
  },
  methods: {
    selRegTabFun (tag) {
      if (tag == '1') {
        this.activeName = 'second'
      } else if (tag == '2') {
        this.activeName = 'three'
      }
    }
  },
  mounted () {
    // var aa = ['first', 'second', 'three']
    // setTimeout(() => {
    //   this.activeName = aa[1]
    // }, 1000)
  }
}
</script>
