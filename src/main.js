// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入mintUI框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


// 导入mui库
import './mui/css/icons-extra.css'
import './mui/css/mui.css'

// 导入resource网络请求库
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入axios网络请求库
import axios from 'axios'
// 将axios绑定在vue原型上 ,this.$axios使用
Vue.prototype.$axios = axios

// 导入时间moment时间插件
import moment from 'moment'

// 导入mint ui 懒加载图片
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);


// 全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern='YYYY-MM-DD') {
    return moment(dateStr).format(pattern)
})

// 导入图片浏览器
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 设置host地址
Vue.http.options.root = 'https://api.daoyitong.com/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App },
  template: '<App/>'
})
