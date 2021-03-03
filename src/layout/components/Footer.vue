<template>
  <div class="footer">
    <div class="footer-left">
      <div class="footer-link">
        <a href="/">关于我们</a>
        <a href="/">加入我们</a>
        <a href="/">联系我们</a>
      </div>
      <p>Copyright © 1998- 2020 Tencent. All Rights Reserved</p>
      <p>
        <span>码上公益提供技术支持</span>
        <span> - </span>
        <span>京ICP备19002149号</span>
        <span> - </span>
        <span>京公网安备45030502000280号</span>
      </p>
    </div>
    <div class="footer-right">
      <a href="/"><img src= "../../assets/Mail.png" /></a>
      <a href="/"><img src= "../../assets/Weibo.png" /></a>
      <a href="/"><img src= "../../assets/WeChat.png" /></a>
      <a href="/"><img src= "../../assets/QQ.png" /></a>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.footer {
  background-color: #FA741F;
  color: white;
  width: 70%;
  padding: 40px 15%;
  overflow: hidden;
  text-align: left;
  .footer-left {
    float: left;
    overflow: hidden;
    .footer-link {
      margin-bottom: 50px;
      a {
        margin-right: 20px;
        color: white;
        text-decoration: none;
      }
    }
    p {
      margin: 15px 0 0 0;
    }
  }
  .footer-right {
    float: right;
    overflow: hidden;
    margin-top: 75px;
    img {
      margin-left: 10px;
    }
  }
}
</style>
