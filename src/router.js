import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
        path:'index',
        name:'movie',
        component:()=>import('./views/movie.vue')
      },
      {
        path:'cinema',
        name:'cinema',
        component:()=>import('./views/cinema.vue')
        
      },
      {
        path:'',
        redirect:'./index'
      }
    
    ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./city/index.vue')
    },
    {
      path: '/film',
      name: 'film',
      component: () => import('./film/film.vue'),
      meta:{
        islogined:true
      }
    },
    {
      path:'*',
      redirect:'./index'
    }
  ]
});


router.beforeEach((to, from, next) => {
  if(to.meta.islogined&&!store.state.login.login_info){

    return next({
      path:'/login',
      query:{
        redirect:to.fullPath
      }
    });
  }
  next()
})

export default router;
