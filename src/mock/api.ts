import {Mock,returnFunc} from './mock'
Mock.mock("/login",(options: any) => {
	let data = options.body;
	if(data.username=='admin'&&data.password=='123456'){
		return returnFunc({
			ret:0,
			msg:'登录成功',
			data
		})
	}else{
		return returnFunc({
			ret:1,
			msg:'用户名或密码错误',
			data
		})
	}
})
