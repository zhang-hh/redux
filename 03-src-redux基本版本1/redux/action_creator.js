/*此文件用于创造一个action对象*/
import {DECREMENT,INCREMENT} from '../redux/action_type'
//创建行为的时候,拿不到用户所选的value,要在调用时函数传参
const createIncrementAction = (value) => ({type:INCREMENT,data:value});
const createDecrementAction = (value) => ({type:DECREMENT,data:value});
export {createDecrementAction,createIncrementAction};