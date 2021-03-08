<template>
    <div>
      <el-row :gutter="20">
        <el-col v-for="(item,index) in contentList" :key="index" :span="6" style="margin-bottom: 30px">
          <template v-if="[0, 2, 5, 7].indexOf(index % 8) > -1">
            <card-a
              :title="item.title"
              :imgUrl="item.imgUrl"
              :clickCount="item.clickCount"
              :height="cardHeight"
              :updateDate="item.updateTime.slice(0, 10)"
            ></card-a>
          </template>
          <template v-else>
            <card-b
              :title="item.title"
              :shortContent="item.shortContent"
              :imgUrl="item.imgUrl"
              :clickCount="item.clickCount"
              :height="cardHeight"
              :updateDate="item.updateTime.slice(0, 10)"
            ></card-b>
          </template>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import CardA from './components/CardA'
import CardB from './components/CardB'
export default {
  components: {
    CardA,
    CardB
  },
  data () {
    return {
      category: null,
      contentList: [],
      cardHeight: 300,
      rowCount: 5,
      pagination: {
        pageSize: 12,
        currPage: 0,
        totalCount: 0,
        totalPage: 0
      }
    }
  },
  methods: {
    updateList: function () {
      this.api.cmsContent.getListPage('', this.pagination.currPage + 1, this.pagination.pageSize)
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.contentList.push.apply(this.contentList, res.data.list)
            console.log(this.contentList)
            this.pagination.currPage = res.data.currPage
            this.pagination.totalCount = res.data.totalCount
            this.pagination.totalPage = res.data.totalPage
          }
        })
    }
  },
  mounted: function () {
    this.updateList()
  }
}
</script>

<style>
</style>
