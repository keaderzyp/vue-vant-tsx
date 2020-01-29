import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/Test';
import '@/modules/commonModule';
import {
	State,
	Mutation,
	Getter,
	Action,
	namespace
} from 'vuex-class'
const CommonModule = namespace('CommonModule');
@Component
export default class Index extends Vue{
	
	private name?:string = "hello-index"
	
	private value?:string = 'haha'
	
	private test?:string = "testsync"
	
	@CommonModule.Getter('getUserInfo') getUserInfo?:any;
	
	handleChange(msg:any){
		console.log(msg);
	}
	render(){
		return (
			<div>
				{this.name}
				<input v-model={this.name}/>
				<Test msg={this.name} 
					onChange={this.handleChange}
					test={this.test}{...{on:{'update:test':(res:any) => {this.test = res}}}}
					v-model={this.value}></Test>
				{this.value}<br/>
				{this.test}<br/>
				{this.getUserInfo.username}
				{this.getUserInfo.password}
			</div>
		)
	}
}