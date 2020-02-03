import Mock from 'mockjs'
Mock.setup({
    timeout: '200-600'
})
interface ResultObject{
	ret?:number;
	msg?:string;
	data?:object;
}
const returnFunc = (res:ResultObject) => {
	return res;
}
export {Mock,returnFunc};

