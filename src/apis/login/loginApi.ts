import request from '@/http';
interface LoginParams{
	username?:string;
	password?:string;
}
export const getLogin = async (data:LoginParams) => {
	return await request({
		url:'/login',
		method:'post',
		data
	})
}