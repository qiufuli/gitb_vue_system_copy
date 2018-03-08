import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
    	path:'/login',
    	//路由懒加载的写法 不用import引入
    	component:resolve => require(['../components/page/Login.vue'],resolve)
    },
    {
    	path:'/readme',
    	component:resolve => require(['../components/common/Home.vue'],resolve)
    }
  ]
})
