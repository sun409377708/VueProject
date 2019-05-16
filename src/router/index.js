import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopContainer from '../components/tabbar/ShopContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewsList from '../components/view/Newslist'
import NewsInfo from '../components/view/NewsInfo'
import PhotoList from '../components/view/PhotoList'

Vue.use(Router)

// export default 将路由对象暴露出去
export default new Router({
  routes: [
    {
      path: '/home', name: 'HomeContainer', component: HomeContainer
    },
    {
      path: '/member', name: 'MemberContainer', component: MemberContainer
    },
    {
      path: '/shop', name: 'ShopContainer', component: ShopContainer
    },
    {
      path: '/search', name: 'SearchContainer', component: SearchContainer
    },
    {
      path:'/home/newList', name:'NewsList', component:NewsList
    },
    {
      path:'/home/newsInfo/:id', name:'NewsInfo', component:NewsInfo
    },
    {
      path:'/home/photoList', name:'PhotoList', component:PhotoList
    },
    {
      path: '/', redirect:'/home'
    },


  ],
  // 覆盖默认路由高亮的类
  linkActiveClass:'mui-active'
})
