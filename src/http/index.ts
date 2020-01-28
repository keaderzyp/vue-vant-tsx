import axios from 'axios';
import { Notify } from 'vant';
//开发域名
let devPath:string = '/';
//生产域名

axios.defaults.baseURL = devPath;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.transformRequest = [(data: any) => {
	// if(data instanceof Object && !(data instanceof FormData)){
	// 	data = JSON.stringify(data)
	// }
	return data;
}],
// 添加请求拦截器
axios.interceptors.request.use((config: any) => {
	// 在发送请求之前做些什么
	return config;
}, (error: any) => {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response: any) => {
	if(response.data.ret!=0){
		Notify(response.data.msg)
	}
	// 对响应数据做点什么
	return response;
}, (error: any) => {
	// 对响应错误做点什么
	return Promise.reject(error);
});
export default axios;