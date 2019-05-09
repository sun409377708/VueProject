import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopContainer from '../components/tabbar/ShopContainer'
import SearchContainer from '../components/tabbar/SearchContainer'


Vue.use(Router)

// export default 将路由对象暴露出去
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HomeContainer',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'MemberContainer',
      component: MemberContainer
    },
    {
      path: '/shop',
      name: 'ShopContainer',
      component: ShopContainer
    },
    {
      path: '/search',
      name: 'SearchContainer',
      component: SearchContainer
    },
  ],
  // 覆盖默认路由高亮的类
  linkActiveClass:'mui-active'
})
