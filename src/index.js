import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import InfoList from './components/info_list';
import InfoDetail from './components/info-detail';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			infoList: {},
			selectInfo: {}
		};
	}
	componentWillMount() {
		this.fetchData('');
	}

	fetchData(queryTerm) {
		
		function getValue(temp) {
			fetch('https://raw.githubusercontent.com/xyz30800/MOCActivity/master/importData/music-indie.json')
				.then(data => data.json())
				.then(data => temp(data))
				.catch((e) => {console.log(e)});
		}

		getValue(temp => {
			const resp = temp;
			const dataLen = (!queryTerm) ? 10 : Object.keys(resp).length;
			const infoList = resp.slice(0, dataLen).filter(info => info.title.includes(queryTerm));
			
			this.setState({
				infoList: infoList,
				selectInfo: infoList[0]
			});
  		})
	}

	render(){
		const eventSearch = _.debounce(term => this.fetchData(term), 300);

		return (
			<div className="container" id="container">
				<InfoList
					fetchData={eventSearch}
					infoList={this.state.infoList}
					onInfoSelect={selectInfo => this.setState({selectInfo})} />

				<InfoDetail 
					InfoDetail={this.state.selectInfo}
				/>	
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#content'));