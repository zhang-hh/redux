/*此文件用于创造一个action对象*/
import {DECREMENT,INCREMENT} from '../redux/action_type'
//创建行为的时候,拿不到用户所选的value,要在调用时函数传参
const createIncrementAction = (value) => ({type:INCREMENT,data:value});
const createDecrementAction = (value) => ({type:DECREMENT,data:value});
//异步的action---异步的action中包裹着同步的action
const createIncrementAsyncAction = (value,time) =>{
	return (dispatch) =>{
		setTimeout(()=>{
			//虽然是异步的相加但是本质还是加,要使用加方法
			dispatch(createIncrementAction(value))
		},time)
	}
};
export {createDecrementAction,createIncrementAction,createIncrementAsyncAction};