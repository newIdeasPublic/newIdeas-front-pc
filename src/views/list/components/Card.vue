<template>
  <div
    :style="{height: height + 'px'}"
    :class="classObject"
  >
    <div class="opacity-bg" v-if="type === 'full'"></div>
    <img :src="article.imgUrl" :style="{height: imgHeight + 'px'}" />
    <div class="content">
      <span class="title">{{ article.title }}</span>
      <p class="short-content" v-if="type !== 'full'">{{ article.shortContent }}</p>
    </div>
    <div class="card-footer">
      <span style="float: left"><i class="el-icon-date"></i> {{ article.updateTime.slice(0, 10) }}</span>
      <span style="float: right"><i class="el-icon-share"></i> 分享</span>
      <span style="float: right; margin-right: 10px"><i class="el-icon-star-off"></i> {{ article.clickCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 350
    },
    article: {
      type: Object,
      default: null
    },
    type: {
      type: String, // leftImg | rightImg | full | vertical
      default: 'full'
    }
  },
  computed: {
    classObject: function () {
      const res = {}
      res[this.type] = true
      return res
    },
    imgHeight: function () {
      if (this.type === 'vertical') {
        return this.height / 2
      } else {
        return this.height
      }
    }
  }
}
</script>

<style lang="scss">
.full {
  position: relative;
  border-radius:10px;
  overflow: hidden;
  cursor: pointer;
  .card-footer, .title, .opacity-bg {
    position: absolute;
  }
  img {
    display: block;
    width: 100%;
  }
  .opacity-bg {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: 2;
  }
  .content {
    top: 40%;
    left: 5%;
    width: 90%;
    z-index: 3;
    color: white;
    text-align: left;
    font-weight: bold;
  }
  .card-footer {
    bottom: 5%;
    left: 5%;
    width: 90%;
    z-index: 3;
    color: white;
    font-size: 14px;
  }
}
.vertical {
  position: relative;
  border-radius:10px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;background-color: #F4F4F4;
  .card-footer, .content, img {
    position: absolute;
  }
  img {
    display: block;
    width: 100%;
    top: 0;
    left: 0;
  }
  .content {
    margin: 0 15px;
    left: 0;
    top: 50%;
    width: 90%;
    height: auto;
    .title {
      top: 40%;
      left: 5%;
      text-align: left;
      font-weight: bold;
    }
  }
  .card-footer {
    bottom: 5%;
    left: 5%;
    width: 90%;
    z-index: 3;
    font-size: 14px;
  }
}
.leftImg, .rightImg {
  position: relative;
  border-radius:10px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  img {
    width: 30%;
  }
  .content {
    width: 65%;
    .title {
      font-weight: bold;
    }
  }
  .card-footer {
    position: absolute;
    bottom: 5%;
    width: 30%;
    z-index: 3;
    font-size: 14px;
  }
}
.leftImg {
  img {
    float: left;
  }
  .content {
    float: right;
  }
  .card-footer {
    left: 35%;
  }
}
.rightImg {
  img {
    float: right;
  }
  .content {
    float: left;
  }
  .card-footer {
    left: 0;
  }
}
</style>
