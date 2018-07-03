import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import travel from '@/components/travel'
import blog from '@/components/blog'
import archives from '@/components/archives'
import others from '@/components/others'
import comment from '@/components/comment'
import all from '@/components/archives/all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[
        {
            path:'',
            component:home
        },
        {
            path:'home',
            component:home
        },
        {
            path:'travel',
            component:travel
        }
      ]
    },
    {
    	path:'/blog',
    	component: blog,
        children:[
            {
                path:'',
                component:all
            },
            {
                path:'all',
                component:all
            }
        ]
    },
    {
    	path:'/archives',
    	component: archives
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
