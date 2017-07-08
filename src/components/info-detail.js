import React, {Component} from 'react';
import PropTypes from 'prop-types';

import GoogleMapComponent from './detail/google_map';
import SelectEvent from './detail/select_event';

class InfoDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			detailData: {},
			eventData: {},
			SelectEventData: {},
			showSelect: false
		};
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.infoDetail)
		const detailMount = nextProps.infoDetail;
		// props 傳入要有值，才能呈現 detail component
		if (Object.keys(detailMount).length !== 0) {

			const eventsList = detailMount.showInfo;
			// 確認 showInfo 是否有多筆 event，有的話 import select component
			if (eventsList.length === 1) {
				this.setState({
					detailData: detailMount,
					eventData: eventsList[0],
					showSelect: false
				});
			} else {
				this.setState({
					detailData: detailMount,
					eventData: eventsList[0],
					SelectEventData: eventsList,
					showSelect: true,
				});
			}
		} else {
			this.setState({ detailData: {}, eventData: {} });
		}
	}

	eventChange(e) {
		const eventIndex = e.target.value;
		const newEventData = this.state.detailData.showInfo[eventIndex];
		this.setState({ eventData: newEventData });
	}

	render() {
		let detailExist = true;
		const nonExist = (<span className="warning">無資料</span>)
		if (Object.keys(this.state.detailData).length === 0) {
			detailExist = false;
		}

		return (
			<div className="info-detail" id="info-detail">
				<div className="header">
		          	<header id="detail-header"><span className="icon-bullhorn"></span>活動細節</header>
		          	{!this.state.showSelect || <SelectEvent eventsList={this.state.SelectEventData} eventChange={(e) => this.eventChange(e)} />}
		        </div>		    	
		        <div className="describe">
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 時間</span>
		            	<span className="describe-cont">{(detailExist) ? this.state.eventData.time : nonExist}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 活動名稱</span>
		            	<span className="describe-cont">{(detailExist) ? this.state.detailData.title : nonExist}</span>
		          	</div>
		          	<div className="describe-col">
		           		<span className="describe-title"><span className="icon-pacman"></span> 演出者</span>
		            	<span className="describe-cont">{(detailExist) ? this.state.detailData.showUnit : nonExist}</span>
		          	</div>
		         	<div className="describe-col">
		           		<span className="describe-title"><span className="icon-pacman"></span> 地點</span>
		            	<span className="describe-cont">{(detailExist) ? this.state.eventData.locationName : nonExist}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 內容</span>
		           		<span className="describe-cont">{(detailExist) ? this.state.detailData.descriptionFilterHtml : nonExist}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 售票/詳細資訊</span>
		            	<span className="describe-cont">
		            		{(detailExist) ? (this.state.eventData.price || '==>') : nonExist}
		            		<a href={this.state.detailData.webSales} target="_blank"><b className="icon-directions_run"></b>{(detailExist) ? '購票/了解去' : ''}</a>
		            	</span>
		         	 </div>
		         	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 地址</span>
		            	<span className="describe-cont"> {(detailExist) ? this.state.eventData.location : nonExist}</span>
		          	</div>
		    	</div>
		        <div className="google-map">
		    		<GoogleMapComponent lng={parseFloat(this.state.eventData.longitude)} lat={parseFloat(this.state.eventData.latitude)} />
		        </div>
	        </div>
		);	
	}
}

InfoDetail.propTypes = {
  	infoDetail: PropTypes.object
}

export default InfoDetail;