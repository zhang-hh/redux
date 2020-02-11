/*
* 本文件是整个redux中最核心的文件----store
*/
//引入createStore,用于创建一个store对象
import {createStore} from 'redux';
//引入reducer,用于操作状态
import counterReducer from './count_reducer'
//在创建store要传一个参数--reducer
export default createStore(counterReducer);