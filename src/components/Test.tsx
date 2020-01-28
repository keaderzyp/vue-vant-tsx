import { Vue , Component ,Model ,Watch ,Prop,Emit } from 'vue-property-decorator';
@Component
export default class Test extends Vue{

	@Prop({required:false,default:''}) 
	private msg?:string
	
	@Model('cc')
	@Prop({required:false,default:'abcd'})
	private value?:string;
	
	@Emit('cc')
	sendValue(val:string){}

	@Watch('msg')
	watchMsg(newVal:string,oldVal:string){
		console.log(oldVal,newVal)
	}

	get computedMsg(){
		return 'msg:'+this.msg;
	}
	handleClick(event:MouseEvent){
		this.sendValue('lalala')
	}
	render(){
		return (
			<div>
				{this.msg}
				<br/>
				{this.computedMsg}<br/>
				{this.value}
				<button onClick={this.handleClick}>点我</button>
			</div>
		)
	}
}