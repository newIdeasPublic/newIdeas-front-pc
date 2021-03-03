<template>
  <div>
    <div class="main-header">
      <div class="opacity-bg"></div>
      <div class="menu">
        <a v-for="i in parseInt(menuList.length/2)" :key="i-1" :href="menuList[i-1].link"><span>{{menuList[i-1].name}}</span></a>
        <a href="/" class="logo-a"><img src="@/assets/logo.png" height="60px" align="middle" /></a>
        <a v-for="i in Math.ceil(menuList.length/2)" :key="i+parseInt(menuList.length/2)-1" :href="menuList[i+parseInt(menuList.length/2)-1].link"><span>{{menuList[i+parseInt(menuList.length/2)-1].name}}</span></a>
      </div>
      <div class="main-page-header">
        <h1>分类标题</h1>
        <p>分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述分类描述</p>
      </div>
    </div>
    <div class="main-body">
      <div style="overflow: hidden;">
        <span style="float: left; font-size: 14px; line-height: 1; margin-right: 15px;">当前位置 :</span>
        <el-breadcrumb style="float: left;" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>资讯内容</el-breadcrumb-item>
          <el-breadcrumb-item>咨询分类</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div style="width: 100%; height: 30px;"></div>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
const menuList = [
  { name: '官网首页', link: '/list' },
  { name: '官网首页', link: '/list' },
  { name: '官网首页', link: '/list' },
  { name: '官网首页', link: '/list' },
  { name: '官网首页', link: '/list' },
  { name: '官网首页', link: '/list' }
]
export default {
  components: {
    Footer
  },
  data () {
    return {
      menuList
    }
  }
}
</script>

<style lang="scss">
.main-header {
  height: 350px !important;
  background: url(../assets/main_layout_header.jpg) no-repeat center;
  position: relative;
  .menu, .opacity-bg, .main-page-header {
    position: absolute;
  }
  .opacity-bg {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: 1;
  }
  .menu {
    top: 40px;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 2;
    text-align:center;
    a {
      color: white;
      text-decoration: none;
      margin: 30px 10px;
      span {
        height: 20px;
      }
    }
    a:hover {
      text-decoration: underline;
    }
    .logo-a {
      margin: 0 20px;
    }
  }
  .main-page-header {
    top: 140px; // 40px + 60px + 40px
    left: 15%;
    width: 70%;
    z-index: 2;
    text-align: left;
    color: #fff;
    h1 {
      font-size: 28px;
    }
  }
}
.main-body {
  margin:40px 15%;
  width: 70%;
}
.main-footer {
  background-color: #FA741F;
}
</style>
