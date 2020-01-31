import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import CommonModule from '@/modules/commonModule';
export default new Vuex.Store<any>(CommonModule)
