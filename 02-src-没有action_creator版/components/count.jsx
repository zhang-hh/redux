import React, {Component} from 'react';
import {DECREMENT,INCREMENT} from '../redux/action_type'
class Count extends Component {
	//加法
	increment = () =>{
	//    1.获取所选的值
		const value = this.refs.countNumber.value;
	//	  2.更改状态
	// 	const number  = this.state.number;
	// 	this.setState({number: number + value*1})
		this.props.store.dispatch({type:INCREMENT,data:value*1})
	};
	//减法
	decrement = () =>{
		//    1.获取所选的值
		const value = this.refs.countNumber.value;
		//	  2.更改状态
		// const number  = this.state.number;
		// this.setState({number: number - value*1})
		this.props.store.dispatch({type:DECREMENT,data:value*1})

	};
	//只在奇数时相加
	incrementOdd =() =>{
		//    1.获取所选的值
		const value = this.refs.countNumber.value;
		//	  2.更改状态
		const number  = this.props.store.getState();
		if (number % 2 === 1){
			this.props.store.dispatch({type:INCREMENT,data:value*1})
		}
	};
	//延迟相加
	incrementAsync =() =>{
		//    1.获取所选的值
		const value = this.refs.countNumber.value;
		// console.log(typeof this.refs.countNumber.value) 所以在下边上要加上*1将字符串转换为数字类型
		//	  2.更改状态
		setTimeout(()=>{
			this.props.store.dispatch({type:INCREMENT,data:value*1})
		},1000)
	};
	render() {
		return (
			<div>
				<h2>现在计数为:{this.props.store.getState()}</h2>
				<select ref='countNumber'>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;&nbsp;
				<button onClick={this.incrementOdd}>add if odd</button>&nbsp;&nbsp;
				<button onClick={this.incrementAsync}>add async</button>
			</div>
		);
	}
}

export default Count;