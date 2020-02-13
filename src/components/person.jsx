import React, {Component} from 'react';
class Person extends Component {
	addPerson = () =>{
	//	获取用户的输入
		const name = this.refs.name.value;
		const age = this.refs.age.value*1;
	//	操作状态
		this.props.addPerson({name,age});
	//	清空输入
		this.refs.name.value = '';
		this.refs.age.value = '';
	};
	render() {
		console.log(this.props.persons);
		return (
			<div>
				<h2>当前的总人数为:{this.props.persons.length}</h2>
				<h3>上方的组件计数为:{this.props.number}</h3>
				<input ref="name" type="text" placeholder="请输入你的姓名"/>&nbsp;
				<input ref="age" type="text" placeholder="请输入你的年龄"/>
				<button onClick={this.addPerson}>提交</button>
				<ul>
					{
						this.props.persons.map((personObj,index) =>{
						    return <li key={index}>姓名:{personObj.name}, 年龄:{personObj.age}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

export default Person;