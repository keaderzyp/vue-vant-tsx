import { Component,Vue } from 'vue-property-decorator';
import style from './App.module.scss';
@Component
export default class App extends Vue{
	render(){
		return (
			<div class={style.app}>
				<router-view></router-view>
			</div>
		)
	}
}