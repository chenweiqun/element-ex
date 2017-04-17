<template lang="pug">
  .demo-data-source
    el-button(@click="$refs.ds.reload(null)") reload
    el-button(@click="$refs.ds.load({type: 1})") load
    el-data-source(url="localhost",:queryParams="{id: 1}",ref="ds")
</template>

<script>
export default {
  mounted () {

  }
}
</script>

<style>
</style>
