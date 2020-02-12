import React, {Component} from 'react';
//渲染容器组件
import Count from "./container/count_container";
class App extends Component {
	render() {
		return (
			<div>
				<Count/>
			</div>
		);
	}
}

export default App;