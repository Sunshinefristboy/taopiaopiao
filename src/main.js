import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import { Tabbar, TabbarItem,Field,Button,Tab, Tabs,Toast,Search,List } from 'vant'
import './assets/base.scss'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(Search)
  .use(List)
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
