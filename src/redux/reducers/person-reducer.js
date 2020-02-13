/*该文件是reducer,是为count服务的reducer
*   注意:reducer必须是纯函数*/
import {ADDPERSON} from '../action_type'
/*reducer 加工状态,初始化状态
接收两个参数,preState和action*/
//如果没有传过来preState,使用默认的(初始化的时候)
//preState=[{},{},{}]
/*纯函数 一类特别的函数:只要是同样的输入(实参),必得到同样的输出(返回)
*   1.不得改写参数数据
*   2.不会产生任何副作用,(不能)例如网络请求,输入输出设备
*   3.不能调用Date.now()或者Math.random()等不纯的方法*/
export default function (preState=[{name:'zhh',age:23}],action) {
	//console.log(preState,action)  你在获取更改的状态之前,preState已经更改了,但由于没有重新render拿不到当前状态
	//type是事件的类型,data是客人要的数据
	const {type,data} = action;//这里的data是一个对象
	//准备好一个变量存放状态
	let newState;
	//用switch判断是加法还是减法
	switch (type) {
		case ADDPERSON:
			//加法逻辑
			newState =[...preState,data];
			/*注意:数组push的方法返回值是数组的长度,并且此时的两个数组的地址是一样的*/
			/*不允许这样写,不会改变数组的地址,从而引起redux做出错误的决定,从而不会更新页面*/
			// preState.unshift(data);//2
			// newState = preState;
			return newState;//业务逻辑要停下
		default:
			return preState;
	}
}