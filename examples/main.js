import Vue from 'vue'
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import App from './app.vue';
import ElementEx from '../src/index'
import "../src/styles/index.less";
import 'element-ui/lib/theme-default/index.css'
import routes from './routes'
Vue.use(ElementUI)
Vue.use(ElementEx)
Vue.use(VueRouter);
const router = new VueRouter({
  routes
})
/* eslint-disable */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
