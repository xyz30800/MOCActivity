import React, {Component} from 'react';
import GoogleMapComponent from './google_map';
import SelectEvent from './search_event';

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
		const detailMount = nextProps.infoDetail;
		if (detailMount || Object.keys(detailMount).length !== 0) {

			const eventsList = detailMount.showInfo;
			if (eventsList.length === 1) {
				this.setState({
					detailData: detailMount,
					eventData: eventsList[0],
					showSelect: false
				});
			} else {
				this.setState({
					detailData: detailMount,
					SelectEventData: eventsList,
					showSelect: true,
				});
			}
		}
	}

	eventChange(e) {
		const eventIndex = e.target.value;
		const newEventData = this.state.detailData.showInfo[eventIndex];
		this.setState({
			eventData: newEventData
		});
	}

	render() {
		return (
			<div className="info-detail" id="info-detail">
				<div className="header">
		          	<header id="detail-header"><span className="icon-bullhorn"></span>活動細節</header>
		          	{!this.state.showSelect || <SelectEvent eventsList={this.state.SelectEventData} eventChange={(e) => this.eventChange(e)}/>}
		        </div>
		        <div className="describe">
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 時間</span>
		            	<span className="describe-cont">{this.state.eventData.time}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 活動名稱</span>
		            	<span className="describe-cont">{this.state.detailData.title}</span>
		          	</div>
		          	<div className="describe-col">
		           		<span className="describe-title"><span className="icon-pacman"></span> 演出者</span>
		            	<span className="describe-cont">{this.state.detailData.showUnit}</span>
		          	</div>
		         	<div className="describe-col">
		           		<span className="describe-title"><span className="icon-pacman"></span> 地點</span>
		            	<span className="describe-cont">{this.state.eventData.locationName}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 內容</span>
		           		<span className="describe-cont">{this.state.detailData.descriptionFilterHtml}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 售票/詳細資訊</span>
		            	<span className="describe-cont">{this.state.eventData.price || '==>'}<a href={this.state.detailData.webSales} target="_blank"><b className="icon-directions_run"></b>購票/了解去</a></span>
		         	 </div>
		         	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 地址</span>
		            	<span className="describe-cont"> {this.state.eventData.location}</span>
		          	</div>
		    	</div>
		        <div className="google-map">
		    		<GoogleMapComponent  lon={this.state.eventData.longitude} lat={this.state.eventData.latitude} />
		        </div>
	        </div>
		);	
	}
}

export default InfoDetail;