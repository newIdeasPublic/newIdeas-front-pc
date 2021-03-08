<template>
  <div class="card-b" :style="{height: height + 'px'}">
    <img :src="imgUrl" :style="{height: height/2 + 'px'}" />
    <div class="card-b-content">
      <p class="content-title">{{ title }}</p>
      <p>{{ shortContent }}</p>
      <div class="content-skeleton" v-if="title === null">
        <p style="width: 60%;"></p>
        <p></p>
        <p></p>
      </div>
      <div class="card-b-footer">
        <span style="float: left"><i class="el-icon-date"></i> {{updateDate}}</span>
        <span style="float: right"><i class="el-icon-share"></i> 分享</span>
        <span style="float: right; margin-right: 10px">
          <i class="el-icon-star-off"></i> {{ clickCount }}
        </span>
      </div>
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
    shortContent: {
      type: String,
      default: ''
    },
    updateDate: {
      type: String,
      default: ''
    },
    clickCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.card-b {
  position: relative;
  border-radius:10px;
  overflow: hidden;
  text-align: left;
  background-color: #F4F4F4;
  cursor: pointer;
  .card-b-content {
    margin: 0 15px;
    .content-title {
      font-weight: 700;
    }
    .content-skeleton {
      p {
        background-color: #fff;
        height: 15px;
      }
    }
  }
  .card-b-footer {
    position: absolute;
    bottom: 15px;
    left: 14px;
    right: 14px;
    z-index: 3;
    color: black;
    font-size: 14px;
  }
  img {
    width: 100%;
    display: block;
  }
}
</style>
