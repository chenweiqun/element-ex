<template lang="pug">
  .app
    div.nav
      el-button-group
        router-link(:to="item.path",v-for="item in routes",:key="item.path")
          el-button(:type="item.path === $route.path? 'primary':'default'") {{item.meta.name}}
    div.container
      el-card
        div(slot="header")
          div {{$route.meta.name}}
          div(style="margin-top:10px")
          div {{$route.meta.desc}}
        router-view
</template>

<script>
import routes from './routes'
export default {
  data () {
    return {
      routes
    }
  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
  .nav{

  }
  .container{
    margin-top:10px;
  }
</style>
<style lang="less">
</style>
