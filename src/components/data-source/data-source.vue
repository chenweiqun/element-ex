<template lang="pug">
  div.el-data-source
    div(v-loading.body="loading",element-loading-text="数据加载中")
      slot(:data="data",:sort="sort")
    div(style="text-align:center")
      el-pagination.mt1(
        v-if='pagination',
        @size-change='handleSizeChange',
        @current-change='handleCurrentChange',
        :current-page='page',
        :page-sizes='pageSizes',
        :page-size='pageSize', :layout='layout',
        :total='total')
</template>

<script>
import * as _ from 'lodash'
import axios from 'axios'
export default {
  name: 'data-source',
  componentName: 'data-source',
  props: {
    url: {
      type: String
    },
    queryParams: {
      type: Object,
      default () {
        return {}
      }
    },
    method: {
      type: String,
      default: 'get'
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 50, 100, 150]
      }
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    pagination: {
      type: Boolean,
      default: true
    },
    pageKey: {
      type: String,
      default: 'page'
    },
    autoLoad: {
      type: Boolean,
      default: true
    },
    limitKey: {
      type: String,
      default: 'rows'
    },
    filter: {
      type: Function,
      default: (data) => {
        return data.rows
      }
    }
  },
  data () {
    return {
      data: [],
      total: 0,
      page: 1,
      rows: 0,
      loading: false
    }
  },
  watch: {
    url (val) {
      if (val) {
        this.load()
      }
    }
  },
  mounted () {
    this.page = this.currentPage
    this.rows = this.pageSize
    if (this.autoLoad) {
      this.load()
    }
    this.$on('sort', (sortModel) => {
      this.sort(sortModel)
    })
  },
  methods: {
    sort (sortInfo) {
      this.reset()
      this.load({sort: sortInfo.sort, order: sortInfo.order})
    },
    handleSizeChange (size) {
      this.rows = size
      this.reset()
      this.load()
    },
    reset () {
      this.page = 1
    },
    handleCurrentChange (currentPage) {
      this.page = currentPage
      this.load()
    },
    async request (params) {
      if (!this.url) {
        return
      }
      let res = null
      try {
        this.loading = true
        let method = this.method.toLowerCase()
        if (method === 'get') {
          res = await axios.get(this.url, {params})
        } else {
          res = await axios[method](this.url, params)
        }
        this.data = this.filter(res.data)
        this.total = res.data.total
        this.$emit('dataChange', this.data)
      } catch (e) {
        // console.log(e)
        if (process.env.NODE_ENV === 'production') {
          this.$message.error('数据读取失败')
        } else {
          this.$message.error(`数据读取失败,错误信息:${e}`)
        }
      } finally {
        this.loading = false
      }
    },
    reload (query = this.queryParams, method = this.method) {
      let params = {}
      if (this.pagination) {
        params[this.limitKey] = this.rows
        params[this.pageKey] = this.page
      }
      this.queryParams = query
      _.assign(params, query)
      this.request(params)
    },
    load (query = this.queryParams, method = this.method) {
      this.reset()
      this.reload(query, method)
    }
  }
}
</script>
