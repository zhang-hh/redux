//容器组件与redux对话,UI组件与容器组件对话
//UI组件不能使用任何的redux API
import Count from "../components/count";
import {connect} from 'react-redux';
import {createIncrementAction,createDecrementAction} from '../redux/action_creator'
/*步骤:
*   1.引入UI组件
*   2.从react-redux中引入connect connect()(UI组件)*/

/*connent 的作用
*   1.生成一个容器组件
*   2.将UI组件和容器组件进行连接*/

/*connect 的用法 第一个括号里面接收两个函数
*  connect(
	() => {}, 该函数的返回值必须是一个对象,对象的key作为props属性的key,value作为props属性的value
	() => {}   该函数的返回值必须是一个对象,对象的key作为props属性的key,value作为props属性的value
)(Count)*/

/*UI组件应该从从容器组件接收的props
*   1.redux的状态
*   2.操作状态的方法*/
export default connect(
	(state) => ({number:state}), //映射UI组件的状态
	//传递操作状态的方法
	//完整版写法 --- 传函数
	/*dispatch => ({
		increment:(value) => dispatch(createIncrementAction(value)),
		decrement:(value) => dispatch(createDecrementAction(value))
	})*/

	//精简版,react-redux进行的高级封装 ---- 传对象
	//connect也可以传递一个回调函数和一个对象
	{
		increment:createIncrementAction,
		decrement:createDecrementAction
	}
)(Count)