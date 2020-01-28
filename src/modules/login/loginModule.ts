import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import store from '@/store';
import router from '@/router';
import { getLogin } from '@/apis/login/loginApi';

@Module({
	name: 'LoginModule',
	namespaced: true,
	dynamic: true,
	store
})
export default class LoginModule extends VuexModule{
	
	private username?:string = '';
	
	private password?:string = '';
	
	private loading?:boolean = false;
	
	private loadingText?:string = '提交中';
	
	get getUsername(){
		return this.username;
	}
	
	@Mutation
	setUsername(username:string){
		this.username = username;
	}
	
	get getPassword(){
		return this.password;
	}
	
	@Mutation
	setPassword(password:string){
		this.password = password;
	}
	
	@Mutation
	setLoading(loading:boolean){
		this.loading = loading;
	}
	
	@Action
	async getLogin(){
		this.setLoading(true);
		let res = await getLogin({
			username:this.getUsername,
			password:this.getPassword
		})
		this.setLoading(false);
		if(res.data.ret == 0){
			router.push('/')
		}
	}
}