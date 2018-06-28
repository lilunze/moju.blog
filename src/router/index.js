import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import blog from '@/components/blog'
import archives from '@/components/archives'
import others from '@/components/others'
import comment from '@/components/comment'
import all from '@/components/archives/vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
    	path:'/blog',
    	component: blog
    },
    {
    	path:'/archives',
    	component: archives,
    	children:[
    		{
    			path:'',
    			component:all
    		}
    	]
    },
    {
    	path:'/others',
    	component: others
    },
    {
    	path:'/comment',
    	component: comment
    }
  ]
})
