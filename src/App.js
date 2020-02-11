import React, {Component} from 'react';
import Count from "./components/count";
class App extends Component {
	render() {
		const store = this.props.store;
		return (
			<div>
				<Count store={store}/>
			</div>
		);
	}
}

export default App;