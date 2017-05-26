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
			selectInfo: {},
			searchTerm: '',
			actType: 'music-indie'
		};
	}
	componentWillMount() {
		this.fetchData(this.state.searchTerm, this.state.actType);
	}

	fetchData(queryTerm, selectTerm) {

		function getValue(temp) {
			fetch(`https://raw.githubusercontent.com/xyz30800/MOCActivity/master/importData/${selectTerm}.json`)
				.then(data => data.json())
				.then(data => temp(data))
				.catch((e) => {console.log(e)});
		}

		getValue(temp => {
			const resp = temp;
			const dataLen = (!queryTerm) ? 5 : Object.keys(resp).length;
			const infoList = resp.slice(0, dataLen).filter(info => info.title.includes(queryTerm));
			
			this.setState({
				infoList: infoList,
				selectInfo: infoList[0]
			});
  		})
	}
	getSearchTerm(term) {
		this.setState({
			searchTerm: term
		});

		this.fetchData(term, this.state.actType)
	}

	getSelectTerm(term) {
		this.setState({
			actType: term
		});

		this.fetchData(this.state.searchTerm, term)
	}

	render(){
		const eventSearch = _.debounce(term => this.getSearchTerm(term), 300);

		return (
			<div className="container" id="container">
				<InfoList
					fetchData={eventSearch}
					infoList={this.state.infoList}
					onInfoSelect={selectInfo => this.setState({selectInfo})} 
					onActSelect={term => this.getSelectTerm(term)} />

				<InfoDetail 
					InfoDetail={this.state.selectInfo}
				/>	
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#content'));