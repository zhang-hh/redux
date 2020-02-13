/*该组件是容器组件,用于给person组件传递:状态,操作状态的方法*/
//容器组件与redux对话,UI组件与容器组件对话
//UI组件不能使用任何的redux API
import  Peason from "../components/person";
import {connect} from 'react-redux';
import {createAddPersontAction} from '../redux/action-creators/person-action-creator'
export default connect(
	(state) => ({persons:state.persons,number:state.number}), //映射UI组件的状态
	{
		addPerson:createAddPersontAction,//映射操作状态的方法
	}
)(Peason)