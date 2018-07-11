import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import home from '@/components/home'
import travel from '@/components/travel'
import blog from '@/components/blog'
import comment from '@/components/comment'
import paper from '@/components/paper/paper'
import travellist from '@/components/travellist'
import bloglist from '@/components/bloglist'
import v10001 from '@/components/posts/v10001'
import v10002 from '@/components/posts/v10002'
import v10003 from '@/components/posts/v10003'
import v20001 from '@/components/posts/v20001'
import v20002 from '@/components/posts/v20002'
import v20003 from '@/components/posts/v20003'

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
            component:travel,
            children:[
                {
                    path:'',
                    component:travellist
                },
                {
                    path:'v10001',
                    component:v10001
                },
                {
                    path:'v10002',
                    component:v10002
                },
                {
                    path:'v10003',
                    component:v10003
                }
            ]
        },
        {
            path:'blog',
            component:blog,
            children:[
                {
                    path:'',
                    component:bloglist
                },
                {
                    path:'v20001',
                    component:v20001
                },
                {
                    path:'v20002',
                    component:v20002
                },
                {
                    path:'v20003',
                    component:v20003
                }
            ]
        },
        {
            path:'comment',
            component:comment
        }
      ]
    },
    {
        path:'/paper',
        component:paper
    }
  ]
})
