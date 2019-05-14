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
// 设置host地址
Vue.http.options.root = 'https://api.daoyitong.com/'

// 导入时间moment时间插件
import moment from 'moment'
// 全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern='YYYY-MM-DD') {
    return moment(dateStr).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
