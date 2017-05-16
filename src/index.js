import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import data from '../importData/exhibition.json';

class App extends Component{

	items() {
		return (
			<div>
				<h1>Welcome!</h1>
				<p></p>
			</div>
		)
		
	}
	render(){
		return (
			<div className="content">
				{this.items()}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#container'));