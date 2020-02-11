//容器组件与redux对话,UI组件与容器组件对话
//UI组件不能使用任何的redux API
import Count from "../components/count";
import {connect} from 'react-redux'
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
	() => ({a:1,b:1}),
	() => {}
)(Count)