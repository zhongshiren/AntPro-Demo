import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import AnalysisPage  from'@/components/dashboard/analysis'
import MonitorPage  from'@/components/dashboard/monitor'
import WorkplacePage  from'@/components/dashboard/workplace'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  mode:'history', //这个是什么，这么重要
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
               {
               	path:'analysis',
               	component:AnalysisPage
               },
               {
               	path:'monitor',
               	component:MonitorPage
               },
               {
               	path:'workplace',
               	component:WorkplacePage
               }
    	 ]
    },
    {
    	path:'/dashboard',
    	/*component:DashboardPage,*/
    	
    }
  ]
})
