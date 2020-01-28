import {Vue,Component} from 'vue-property-decorator';
import '@/modules/login/loginModule';
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
	@LoginModule.Action('getLogin') getLogin:any;
	@LoginModule.State('loading') loading:any;
	@LoginModule.State('loadingText') loadingText:any;
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
	
	async handleSub(){
		await this.getLogin();
	}
	render(){
		return (
			<div class='router-pages'>
				<van-field v-model={this.username} placeholder='请输入账号' label='账号' />
				<van-field v-model={this.password} type='password' placeholder='请输入密码' label='密码' />
				<van-button type='primary' loading={this.loading}
					onClick={this.handleSub}
					loadingText={this.loadingText} size='large' >提交</van-button>
			</div>
		)
	}
}