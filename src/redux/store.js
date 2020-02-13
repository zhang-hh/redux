/*
* 本文件是整个redux中最核心的文件----store
*/
//引入createStore,用于创建一个store对象
import {createStore,applyMiddleware} from 'redux';
//引入reducer,用于操作状态,现在这里是所有的reducer汇总,因为是index,所以不用写后边的
import reducer from './reducers';
//引入redux-thunk用于异步编程
import thunk from 'redux-thunk';
//引入composeWithDevTools,用于调试redux代码
import {composeWithDevTools} from 'redux-devtools-extension';
//在创建store要传一个参数--reducer
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));