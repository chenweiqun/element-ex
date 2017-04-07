<template lang="pug">
  .el-cropper
    .el-upload.el-upload--text
      button.el-button.el-button--primary.el-button--small(
          type='button',
          @click="selectImg",
          style="margin:5px 0px"
        )
        span {{label}}
      input.file-input.el-upload__input(type='file', accept="image/gif,image/jpg,image/png,image/jpeg")
    div(:style="{'width':width,'height':height}",v-show="showCroper")
      img.image
</template>

<script>
import $ from 'jquery'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import emitter from '@/mixins/emitter'
export default {
  mixins: [emitter],
  props: {
    width: {
      type:String,
      default: '300px'
    },
    height: {
      type:String,
      default: '300px'
    },
    value: String,
    label: {
      type: String,
      default: '选择图片'
    },
    options: {
      type: Object,
      default: function () {
        return {
          aspectRatio: 1,
          dragMode: 'move',
          movable: true,
          zoomable: true,
          scalable: true,
          ready: () => {
          },
          cropend: () => {
          }
        }
      }
    }
  },
  watch: {
    value (val) {
      let $image = $('.image', this.$el)
      if (val) {
        $image.attr('src', val)
        this.setCropper(val)
        this.showCroper = true
      } else {
        this.clearCrooper()
        $image.attr('src', '')
        this.showCroper = false
      }
      this.dispatch('ElFormItem', 'el.form.change', [val])
    }
  },
  data () {
    return {
      showCroper: false
    }
  },
  beforeDestroy () {
    if (this.uploadedImageURL) {
      URL.revokeObjectURL(this.uploadedImageURL)
    }
    if (this.cropper) {
      this.cropper.destroy()
    }
  },
  methods: {
    getCropper () {
      return this.cropper
    },
    toBlob (type = 'image/png', compress = 1, width = 200, height = 200) {
      return new Promise((resolve, reject) => {
        this.cropper.getCroppedCanvas({width, height}).toBlob((blob) => {
          resolve(blob)
        }, type, compress)
      })
    },
    clearCrooper () {
      if (this.uploadedImageURL) {
        URL.revokeObjectURL(this.uploadedImageURL)
      }
      if (this.cropper) {
        this.cropper.clear()
      }
    },
    selectImg () {
      let fileInput = $('.file-input', this.$el)
      fileInput.trigger('click')
    },
    setCropper (val) {
      if (this.cropper) {
        this.cropper.replace(val)
        return
      }
      this.showCroper = true
      this.$nextTick(() => {
        let image = $('.image', this.$el)[0]
        let cropper = new Cropper(image, this.options)
        this.cropper = cropper
      })
    },
    initFileInput () {
      this.uploadedImageURL = null
      let fileInput = $('.file-input', this.$el)
      fileInput.change((evt) => {
        let files = evt.target.files
        if (files && files.length) {
          let URL = window.URL || window.webkitURL
          if (this.uploadedImageURL) {
            URL.revokeObjectURL(this.uploadedImageURL)
          }
          this.uploadedImageURL = URL.createObjectURL(files[0])
          this.$emit('input', this.uploadedImageURL)
        }
      })
    }
  },
  mounted () {
    if (!this.url) {
      this.initFileInput()
    } else {
      this.setUrl(this.url)
    }
  }
}
</script>

<style lang="less">
</style>
