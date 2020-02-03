import { Module,VuexModule, Mutation, Action ,getModule} from 'vuex-module-decorators'
import store from '@/store';
import router from '@/router';
import { getLogin } from '@/apis/login/loginApi';
import BaseModel from '@/models/baseModel';
import CommonModel from '@/models';
const commonModel = getModule(CommonModel,store);
@Module({
	name: 'login',
	namespaced: true,
	stateFactory: true,
	dynamic: true,
	store
})
export default class LoginModel extends BaseModel{

	protected formData?:any={username:'c',password:'d'};

	protected username?:string = 'admin';

	protected password?:string = '123456';

	protected loading?:boolean = false;

	protected loadingText?:string = '提交中';


	get getFormData(){
		return this.formData;
	}

	@Mutation
	setFormData(formData:any){
		this.formData = formData;
	}

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
			commonModel.setTest('bbb');
			commonModel.setUserInfo(res.data.data);
			router.push('/')
		}

	}
}
