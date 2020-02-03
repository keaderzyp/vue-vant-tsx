import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import CommonModel from '@/models';
export default new Vuex.Store<any>(CommonModel)
