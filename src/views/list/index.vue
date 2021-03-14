<template>
    <div>
      <el-row :gutter="20" listStyle>
        <el-col
          v-for="(item,index) in contentList"
          :key="index"
          :span="listStyle === 'card' ? 6 : 24"
          style="margin-bottom: 30px"
        >
          <card
            :article="item"
            :height="listStyle === 'card' ? 300 : 200"
            :type="computeType(index)"
          ></card>
        </el-col>
      </el-row>
      <el-button
        v-if="this.pagination.totalPage === this.pagination.currPage"
        style="width: 30%; margin-top: 60px"
        disabled
        round
      >
        到底了……
      </el-button>
      <el-button
        v-else
        :loading="loading"
        style="width: 30%; margin-top: 60px"
        round
        @click="loadMore"
      >
      {{ loading ? '加载中……' : '加载更多' }}
      </el-button>
    </div>
</template>

<script>
import Card from './components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      listStyle: 'card', // card | list
      contentList: [],
      loading: false,
      pagination: {
        pageSize: 8,
        currPage: 0,
        totalCount: 0,
        totalPage: 0
      }
    }
  },
  methods: {
    computeType: function (index) {
      if (this.listStyle === 'card') {
        return index % 2 === 0 ? 'full' : 'vertical'
      } else {
        return index % 2 === 0 ? 'rightImg' : 'leftImg'
      }
    },
    loadMore: function () {
      if (!this.loading) {
        this.updateList()
      }
    },
    updateList: function () {
      this.loading = true
      this.api.cmsContent.getListPage('', this.pagination.currPage + 1, this.pagination.pageSize)
        .then(res => {
          console.log(res)
          if (res.code === 200) {
            this.contentList.push.apply(this.contentList, res.data.list)
            console.log(this.contentList)
            this.pagination.currPage += 1
            this.pagination.totalCount = res.data.totalCount
            this.pagination.totalPage = res.data.totalPage
            this.loading = false
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
