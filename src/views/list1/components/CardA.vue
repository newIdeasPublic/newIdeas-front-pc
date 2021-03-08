<template>
  <div :style="{height: height + 'px'}" class="card-a" @mouseover="mouseOver()" @mouseleave="mouseLeave()">
        <img :src="imgUrl" :style="{height: imgHeight + 'px'}" :class="{'mouse-over': isMouseOver}" />
    <div class="opacity-bg"></div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <div class="card-footer">
      <span style="float: left"><i class="el-icon-date"></i> {{ updateDate }}</span>
      <span style="float: right"><i class="el-icon-share"></i> 分享</span>
      <span style="float: right; margin-right: 10px"><i class="el-icon-star-off"></i> {{ clickCount }}</span>
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
    imgUrl: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    updateDate: {
      type: String,
      default: ''
    },
    clickCount: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      isMouseOver: false,
      imgHeight: 400
    }
  },
  methods: {
    mouseOver: function () {
      this.imgHeight = 1.4 * this.height
      this.isMouseOver = true
    },
    mouseLeave: function () {
      this.imgHeight = this.height
      this.isMouseOver = false
    }
  }
}
</script>

<style lang="scss">
.card-a {
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
  .mouse-over {
    width: 140%;
    margin-left: -20%;
    margin-top: -20%;
  }
  img:hover {
    width: 120%;
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
  .title {
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
</style>
