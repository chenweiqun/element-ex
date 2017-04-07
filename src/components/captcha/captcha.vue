<template lang="pug">
  el-tooltip(content="点击可刷新验证码")
    img(:src="captchUrl",@click="updateUrl",:height="height")
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      defualt: ''
    },
    height: {
      type: String,
      default: '30px'
    }
  },
  data () {
    return {
      captchUrl: ''
    }
  },
  methods: {
    updateUrl () {
      // 服务器验证码服务
      if(this.url.slice(0,5) === 'data:') {
        this.captchUrl = this.url
      } else {
        this.captchUrl = `${this.url}?rand=${Math.random()}`
      }
    }
  },
  mounted () {
    this.captchUrl = this.url
    this.updateUrl()
  },
  components () {

  }
}
</script>

<style lang="less">
</style>
