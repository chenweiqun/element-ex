import panel from '@/components/panel'
import captcha from '@/components/captcha'
import dataSource from '@/components/data-source'
import qrcode from '@/components/qrcode'
import cropper from '@/components/cropper'
const install = function (Vue) {
  Vue.component('el-panel', panel)
  Vue.component('el-captcha', captcha)
  Vue.component('el-data-source', dataSource)
  Vue.component('el-qrcode', qrcode)
  Vue.component('el-cropper', cropper)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* eslint-disable */
export default install
