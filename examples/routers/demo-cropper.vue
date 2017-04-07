<template lang="pug">
  .demo-cropper
    el-cropper(v-model="imgUrl")
</template>

<script>
export default {
  data () {
    return {imgUrl: ''}
  }
}
</script>

<style lang="css" scoped>
</style>
