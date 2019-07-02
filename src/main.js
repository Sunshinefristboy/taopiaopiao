import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import { Tabbar, TabbarItem,Field,Button  } from 'vant'
import './assets/base.scss'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false
Vue.use(Tabbar)
  .use(TabbarItem)
  .use(Field)
  .use(Button)
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
