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
			actType: 'music-indie',
		};
	}
	componentWillMount() {
		this.fetchData(this.state.searchTerm, this.state.actType);
	}

	fetchData(queryTerm, selectTerm) {

		function getValue(temp) {
			//fetch(`https://raw.githubusercontent.com/xyz30800/MOCActivity/master/importData/${selectTerm}.json`)
			fetch(`https://raw.githubusercontent.com/xyz30800/MOCActivity/master/importData/${selectTerm}.json`)
				.then(data => data.json())
				.then(data => temp(data))
				.catch((e) => {console.log(e)});
		}

		getValue(temp => {

			const resp = temp;
			const dataTotalLen = Object.keys(resp).length;
			const dataLen = (!queryTerm) ? 5 : dataTotalLen;
			//const dataLen = 5;
			const infoList = resp.filter(info => info.title.includes(queryTerm)).slice(0, dataLen);

			if (infoList.length !== 0) {// 如果搜尋結果不為空，儲存 selectInfo
				this.setState({ selectInfo: infoList[0] });
			}
			// 不管搜尋結果為何，一律傳到 InfoList 去判斷是否為空，如為空則秀出'無資料'
			this.setState({ infoList, dataTotalLen });
  		})
	}
	getSearchTerm(searchTerm) {
		this.setState({searchTerm});
		this.fetchData(searchTerm, this.state.actType)
	}

	getSelectTerm(actType) {
		this.setState({actType});
		this.fetchData(this.state.searchTerm, actType)
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