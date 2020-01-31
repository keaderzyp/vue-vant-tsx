import { Module,VuexModule, Mutation, Action ,getModule,MutationAction} from 'vuex-module-decorators'
import BaseModule from '@/modules/baseModule';

@Module({
	name:'base'
})
export default class CommonModule extends BaseModule{
	
	conferences: Array<any> = []
	events: Array<any> = []
	
	private test?:string = 'aaa';
	
	get getTest(){
		return this.test;
	}
	
	@Mutation
	setTest(test:string){
		this.test = test;
	}
	@MutationAction({ mutate: ['events', 'conferences'] })
	public async commitSetUserInfo(arg:any){
		this.commit('setUserInfo',arg)
		return {events:[],conferences:[]}
	}
	
	get getUserInfo(){
		return this.userInfo;
	}
}