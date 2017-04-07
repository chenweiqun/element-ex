<template lang="pug">
  .demo-captcha
    el-captcha(:url="imgUrl")
</template>

<script>
import imgUrl from './assets/captcha.jpg'
export default {
  data () {
    return {
      imgUrl
    }
  }
}
</script>

<style lang="less" scoped>
</style>
