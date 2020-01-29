import { Module,VuexModule, Mutation, Action } from 'vuex-module-decorators'


export default class BaseModule extends VuexModule{

	protected userInfo?:any={username:'',password:''}

	@Mutation
	setUserInfo(userInfo:any){
		this.userInfo = userInfo;
	}
	
}