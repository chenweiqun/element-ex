<template lang="pug">
  .demo-panel
    el-button(@click="showPanel=true") 打开面板
    el-panel(v-model="showPanel",title="我是一个面板",:close-on-click-modal="false")
      div
        span hello world
      div(slot="footer")
        el-button(type="primary") 确定
</template>

<script>
export default {
  data () {
    return {
      showPanel: false
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
