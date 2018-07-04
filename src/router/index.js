import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import travel from '@/components/travel'
import blog from '@/components/blog'
import comment from '@/components/comment'
// import paper from '@/components/paper/paper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children:[
        {
            path:'',
            redirect: '/home'
        },
        {
            path:'home',
            component:home
        },
        {
            path:'travel',
            component:travel
        },
        {
            path:'blog',
            component:blog
        },
        {
            path:'comment',
            component:comment
        }
      ]
    },
    {
        path:'/paper',
        component:comment
    }
  ]
})
