/*此文件用于创造一个action对象*/
import {ADDPERSON} from '../action_type'
//创建行为的时候,拿不到用户所选的value,要在调用时函数传参
export const createAddPersontAction = (personObj) => ({type:ADDPERSON,data:personObj});
