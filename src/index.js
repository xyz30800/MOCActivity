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
			dataTotalLen: 0,
			searchTerm: '',
			selectTerm: 'music-indie',
		};
	}
	componentWillMount() {
		this.fetchData(this.state.searchTerm, this.state.selectTerm);
	}

	fetchData(searchTerm, selectTerm) {

		function getValue(temp) {
			//fetch(`https://raw.githubusercontent.com/xyz30800/MOCActivity/master/importData/${selectTerm}.json`)
			fetch(`https://raw.githubusercontent.com/xyz30800/MOCActivity/master/importData/${selectTerm}.json`)
				.then(data => data.json())
				.then(data => temp(data))
				.catch((e) => { console.log(e)} );
		}

		getValue(temp => {
			const resp = temp;
			const dataTotalLen = Object.keys(resp).length;
			const dataLen = (!searchTerm) ? 5 : dataTotalLen;
			const infoList = resp.filter(info => info.title.includes(searchTerm)).slice(0, dataLen);

			if (infoList.length !== 0) {// 如果搜尋結果不為空，要儲存 selectInfo
				//console.log('1')
				this.setState({ 
					selectInfo: infoList[0],
					infoList,
					selectTerm,
					searchTerm,
					dataTotalLen
				});
			} else {
				//console.log('2')
				this.setState({ 
					selectInfo: {},
					infoList,
					selectTerm,
					searchTerm,
					dataTotalLen 
				});
			}
  		})
	}
	getSearchTerm(searchTerm) {
		this.fetchData(searchTerm, this.state.selectTerm)
	}

	getSelectTerm(selectTerm) {
		this.fetchData(this.state.searchTerm, selectTerm)
	}

	render(){
		const eventSearch = _.debounce(term => this.getSearchTerm(term), 300);

		return (
			<div className="container" id="container">
				<InfoList
					fetchData={eventSearch}
					infoList={this.state.infoList}
					onInfoSelect={selectInfo => this.setState({selectInfo})} 
					onActSelect={term => this.getSelectTerm(term)}
					dataTotalLen={this.state.dataTotalLen} />

				<InfoDetail 
					infoDetail={this.state.selectInfo} />	
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#content'));