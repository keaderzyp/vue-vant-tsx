import { Vue, Component } from 'vue-property-decorator';
import Test from '@/components/Test';
@Component
export default class Index extends Vue{
	
	private name?:string = "hello-index"
	
	private value?:string = 'haha'
	
	render(){
		return (
			<div>
				{this.name}
				<input v-model={this.name}/>
				<Test msg={this.name}  v-model={this.value}></Test>{this.value}
			</div>
		)
	}
}