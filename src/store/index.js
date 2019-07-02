import Vue from 'vue'
import Vuex from 'vuex'

import film from './modules/films'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        film
    }
})