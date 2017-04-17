<template lang="pug">
  .el-panel(v-show="value")
    .el-panel-modal(ref="modal",@click.self="closeModal")
      .el-panel-modal-wrapper(:style="{'width':px(width)}")
        .el-panel-modal-header
          .el-panel-modal-title {{title}}
          i.el-panel-modal-close-btn.el-icon-close(@click.self="close")
        .el-panel-modal-cotent
          slot(name="default")
        .el-panel-modal-footer
          slot(name="footer")
</template>

<script>
// import $ from 'jquery'
// import _ from 'lodash'
export default {
  props: {
    size: {
      type: String,
      default: 'small'
    },

    width: {
      type: [String, Number],
      default: '800px'
    },
    customClass: {
      type: String,
      default: ''
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
  computed: {
  },
  methods: {
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
