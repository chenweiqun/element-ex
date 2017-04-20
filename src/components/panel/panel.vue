<template lang="pug">
    .el-panel(v-show="value")
      .el-panel-modal(ref="modal",@click.self="closeModal")
        transition(name="el-panel-fade")
          .el-panel-modal-wrapper(:style="getWrapperStyle()",v-show="value")
            .el-panel-modal-header
              .el-panel-modal-title {{title}}
              i.el-panel-modal-close-btn.el-icon-close(@click.self="close",v-if="showClose")
            .el-panel-modal-cotent(v-if="isInit || value")
              slot(name="default")
            .el-panel-modal-footer
              slot(name="footer")
</template>

<script>
// import $ from 'jquery'
// import _ from 'lodash'
export default {
  props: {
    width: {
      type: [String, Number],
      default: '800px'
    },
    top: {
      type: String,
      default: '15%'
    },

    showClose: {
      type: Boolean,
      default: true
    },

    title: {
      type: String,
      default: ''
    },

    value: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value (val) {
      if (val) {
        this.isInit = true
      }
    }
  },
  data () {
    return {
      isInit: false
    }
  },
  computed: {
  },
  methods: {
    getWrapperStyle () {
      return {'width': this.px(this.width)}
    },
    px (val) {
      return parseInt(val) + 'px'
    },
    closeModal () {
      if (this.closeOnClickModal) {
        this.close()
      }
    },
    close () {
      this.$emit('close')
      this.$emit('input', false)
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
