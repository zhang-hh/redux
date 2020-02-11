import React, {Component} from 'react';

class Count extends Component {
	state = {
		number:0
	};
	//加法
	addition = () =>{
	//    1.获取所选的值
		const value = this.refs.countNumber.value;
	//	  2.更改状态
		const number  = this.state.number;
		this.setState({number: number + value*1})
	};
	//减法
	subtraction = () =>{
		//    1.获取所选的值
		const value = this.refs.countNumber.value;
		//	  2.更改状态
		const number  = this.state.number;
		this.setState({number: number - value*1})
	};
	//只加奇数
	addOdd =() =>{
		//    1.获取所选的值
		const value = this.refs.countNumber.value;
		//	  2.更改状态
		const number  = this.state.number;
		if (number % 2 === 1){
			this.setState({number: number + value*1})
		}
	};
	//延迟相加
	addAsync =() =>{
		//    1.获取所选的值
		const value = this.refs.countNumber.value;
		// console.log(typeof this.refs.countNumber.value) 所以在下边上要加上*1将字符串转换为数字类型
		//	  2.更改状态
		const number  = this.state.number;
		setTimeout(()=>{
			this.setState({number: number + value*1})
		},1000)
	};
	render() {
		return (
			<div>
				<h2>现在计数为:{this.state.number}</h2>
				<select ref='countNumber'>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;&nbsp;
				<button onClick={this.addition}>+</button>&nbsp;&nbsp;
				<button onClick={this.subtraction}>-</button>&nbsp;&nbsp;
				<button onClick={this.addOdd}>add if odd</button>&nbsp;&nbsp;
				<button onClick={this.addAsync}>add async</button>
			</div>
		);
	}
}

export default Count;