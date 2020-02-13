/*该文件用于汇总所有的reducer*/
import countReduer from './count_reducer';
import personReduer from './person-reducer';

import {combineReducers} from "redux";
//combineReducer用于合并多个reducer,最终生成一个总的reducer

/*combineReducers传入的对象,就得redux帮我们保存的状态*/
export default combineReducers({
	number:countReduer,
	persons:personReduer
})