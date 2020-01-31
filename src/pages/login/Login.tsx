import {Vue,Component} from 'vue-property-decorator';
import '@/modules/login/loginModule';
import style from './Login.module.scss';

import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
const LoginModule = namespace('LoginModule');
@Component
export default class Login extends Vue{
	@LoginModule.Getter('getUsername') getUsername:any;
	@LoginModule.Mutation('setUsername') setUsername:any;
	@LoginModule.Getter('getPassword') getPassword:any;
	@LoginModule.Mutation('setPassword') setPassword:any;
	@LoginModule.Getter('getFormData') getFormData:any;
	@LoginModule.Mutation('setFormData') setFormData:any;
	@LoginModule.Action('getLogin') getLogin:any;
	@LoginModule.State('loading') loading:any;
	@LoginModule.State('loadingText') loadingText:any;
	@State('test') test:any;
	@Mutation('setUserInfo') setUserInfo:any;
	@Getter('getUserInfo') getUserInfo:any;
	@Action('commitSetUserInfo') commitSetUserInfo:any;
	created(){
		console.log(this)
	}
	
	get username(){
		return this.getUsername;
	}
	set username(username:string){
		this.setUsername(username);
	}
	
	get password(){
		return this.getPassword;
	}
	set password(password:string){
		this.setPassword(password);
		
	}
	set formData(formData:any){
		this.setFormData(formData)
	}
	get formData(){
		return this.getFormData;
	}
	
	async handleSub(){	
		await this.commitSetUserInfo({username:'a',password:'b'})
		await this.getLogin();
	}
	render(){
		return (
			<div class={style['router-pages']}>
				{this.test}<br/>
				{this.getUserInfo.username}<br/>
				{this.getUserInfo.password}<br/>
				<van-field v-model={this.formData.username}
					clearable
					placeholder='请输入账号' label='测试formData.username' />
				<van-field v-model={this.formData.password}
					clearable
					placeholder='请输入账号' label='测试formData.password' />
				<van-field v-model={this.username} 
					clearable
					placeholder='请输入账号' label='账号' />
				<van-field v-model={this.password} 
					clearable
					type='password' placeholder='请输入密码' label='密码' />
				<van-button type='primary' loading={this.loading}
					onClick={this.handleSub}
					loadingText={this.loadingText} 
					size='large' >登录</van-button>
			</div>
		)
	}
}