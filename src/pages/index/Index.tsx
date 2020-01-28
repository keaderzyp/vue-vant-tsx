import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/Test';
@Component
export default class Index extends Vue{
	
	private name?:string = "hello-index"
	
	private value?:string = 'haha'
	
	private test?:string = "testsync"
	
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
				v-model={this.value}></Test>{this.value}
				{this.test}
			</div>
		)
	}
}