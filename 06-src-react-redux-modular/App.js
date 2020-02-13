import React, {Component} from 'react';
//渲染容器组件
import Count from "./container/count_container";
import Person from "./container/person_container";
class App extends Component {
	render() {
		return (
			<div>
				<Count/>
				<br/>
				<Person/>
			</div>
		);
	}
}

export default App;