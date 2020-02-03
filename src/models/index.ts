import { Module,VuexModule, Mutation, Action ,getModule,MutationAction} from 'vuex-module-decorators'
import BaseModule from './baseModel';

@Module({
	name:'base'
})
export default class CommonModel extends BaseModule{

	[propName:string]:any
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
