import { Module,VuexModule, Mutation, Action ,getModule} from 'vuex-module-decorators'
import store from '@/store';
import BaseModel from '@/models/baseModel';
@Module({
	name: 'index',
	namespaced: true,
	stateFactory: true,
	dynamic: true,
	store
})
export default class IndexModel extends BaseModel{


}
