export default [
  {
    path: '/demo-panel',
    meta: {name: '面板demo', desc: '主要解决element-ui的dialog不能嵌套的问题'},
    component: require('./routers/demo-panel.vue')
  },
  {
    path: '/demo-captcha',
    meta: {name: '验证码demo'},
    component: require('./routers/demo-captcha.vue')
  },
  {
    path: '/demo-data-source',
    meta: {name: '数据源组件'},
    component: require('./routers/demo-data-source')
  },
  {
    path: '/demo-qrcode',
    meta: {name: '二维码组件'},
    component: require('./routers/demo-qrcode')
  },
  {
    path: '/demo-cropper',
    meta: {name: '裁切组件'},
    component: require('./routers/demo-cropper')
  }
]
