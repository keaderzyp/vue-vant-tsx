import { Module,VuexModule, Mutation, Action ,getModule} from 'vuex-module-decorators'
import store from '@/store';
import BaseModule from '@/modules/baseModule';
@Module({
	name: 'CommonModule',
	namespaced: true,
	stateFactory: true,
	dynamic: true,
	store
})
export default class CommonModule extends BaseModule{
	
	get getUserInfo(){
		return this.userInfo;
	}
}