import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
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
      component: () => import('./city/city.vue')
    },
    {
      path:'*',
      redirect:'./index'
    }
  ]
})
