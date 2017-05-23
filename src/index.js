import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import InfoList from './components/info_list';
import infoDetail from './components/info-detail';

class App extends Component{
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
				.catch(() => {console.log("error")});
		}

		getValue(temp => {
			const resp = temp;
			const dataLen = (!queryTerm) ? 10 : Object.keys(resp).length;
			const queryResult = resp.slice(0, dataLen).filter(info => info.title.includes(queryTerm));

			this.setState({
				infoList: queryResult,
			});
  		})
	}

	showDetail(selectInfo) {

		this.setState({selectInfo});
		console.log(selectInfo)

		// const detaildiv = document.querySelector('#info-detail');
  // 		const listldiv = document.querySelector('#info-list');

		// listldiv.style['width'] = 'calc(50% - 8px)';
  //       detaildiv.style['width'] = 'calc(50% - 8px)';
  //       detaildiv.style['display'] = 'inline-block'; 
	}

	render(){
		const eventSearch = _.debounce(term => this.fetchData(term), 300);

		return (
			<div className="container" id="container">
				<div className="info-list" id="info-list">
					<header className="header"><span className="icon-map2"></span>最近活動</header>
					<SearchBar fetchData={eventSearch} />
					<InfoList 
						onInfoSelect={selectInfo => this.showDetail(selectInfo)} 
						infoList={this.state.infoList} />
				</div>
				<div className="info-detail" id="info-detail">
					<infoDetail />
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#content'));