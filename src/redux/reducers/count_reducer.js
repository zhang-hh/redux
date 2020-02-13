/*该文件是reducer,是为count服务的reducer*/
import {DECREMENT,INCREMENT} from '../action_type'
/*reducer 加工状态,初始化状态
接收两个参数,preState和action*/

//如果没有传过来preState,使用默认的(初始化的时候)
export default function (preState=0,action) {
	//console.log(preState,action)  你在获取更改的状态之前,preState已经更改了,但由于没有重新render拿不到当前状态
	//type是事件的类型,data是客人要的数据
	const {type,data} = action;
	//准备好一个变量存放状态
	let newState;
	//用switch判断是加法还是减法
	switch (type) {
	case INCREMENT:
		//加法逻辑
		newState = preState + data;
	    return newState;//业务逻辑要停下
	case DECREMENT:
		//减法逻辑
		newState = preState - data;
	    return newState;
	default:
		return preState;
	}
}