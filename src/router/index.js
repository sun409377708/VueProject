import Vue from 'vue'
import Router from 'vue-router'
// import HomeContainer from '../components/tabbar/HomeContainer'
const Home = () => import('../components/tabbar/HomeContainer')
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopContainer from '../components/tabbar/ShopContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import NewsList from '../components/view/Newslist'
import NewsInfo from '../components/view/NewsInfo'
import PhotoList from '../components/view/PhotoList'
import PhotoInfo from '../components/view/PhotoInfo'
import GoodsList from '../components/view/GoodsList'
import GoodsInfo from '../components/view/GoodsInfo'
import GoodsDesc from '../components/view/GoodsDesc'
import GoodsComment from '../components/view/GoodsComment'

Vue.use(Router)

// export default 将路由对象暴露出去
export default new Router({

  mode: 'history',
  routes: [
    { path: '/home', name: 'HomeContainer', component: Home},
    { path: '/member', name: 'MemberContainer', component: MemberContainer },
    { path: '/shop', name: 'ShopContainer', component: ShopContainer },
    { path: '/search', name: 'SearchContainer', component: SearchContainer },
    { path: '/home/newList', name:'NewsList', component:NewsList },
    { path: '/home/newsInfo/:id', name:'NewsInfo', component:NewsInfo },
    { path: '/home/photoList', name:'PhotoList', component:PhotoList },
    { path: '/home/photoInfo/:id', name:'PhotoInfo', component:PhotoInfo },
    { path: '/home/goodsList', name:'GoodsList', component:GoodsList },
    { path: '/home/goodsInfo/:id', name:'GoodsInfo', component:GoodsInfo },
    { path: '/home/goodsDesc/:id', name:'GoodsDesc', component:GoodsDesc },
    { path: '/home/goodsComment/:id', name:'GoodsComment', component:GoodsComment },

    {
      path: '/', redirect:'/home'
    },


  ],
  // 处理滚动顶部问题
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  // 覆盖默认路由高亮的类
  linkActiveClass:'mui-active'
})
