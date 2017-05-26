import React, {Component} from 'react';
import GoogleMapComponent from './google_map';

const InfoDetail = ({InfoDetail}) => {
	
	let detailHTML;
	if (!InfoDetail || Object.keys(InfoDetail).length === 0) {
		detailHTML = '';
	} else {
		const showInfo = InfoDetail.showInfo[0];
		const {longitude, latitude} = showInfo;
		detailHTML = (
			<div>
				<div className="header">
		          	<header id="detail-header"><span className="icon-bullhorn"></span>活動細節</header>
		        </div>
		        <div className="describe">
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 時間</span>
		            	<span className="describe-cont">{showInfo.time}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 活動名稱</span>
		            	<span className="describe-cont">{InfoDetail.title}</span>
		          	</div>
		          	<div className="describe-col">
		           		<span className="describe-title"><span className="icon-pacman"></span> 演出者</span>
		            	<span className="describe-cont">{InfoDetail.showUnit}</span>
		          	</div>
		         	<div className="describe-col">
		           		<span className="describe-title"><span className="icon-pacman"></span> 地點</span>
		            	<span className="describe-cont">{showInfo.locationName}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 內容</span>
		           		<span className="describe-cont">{InfoDetail.descriptionFilterHtml}</span>
		          	</div>
		          	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 售票/詳細資訊</span>
		            	<span className="describe-cont">{showInfo.price}<a href={InfoDetail.webSales} target="_blank"><b className="icon-directions_run"></b>購票/了解去</a></span>
		         	 </div>
		         	<div className="describe-col">
		            	<span className="describe-title"><span className="icon-pacman"></span> 地址</span>
		            	<span className="describe-cont"> {showInfo.location}</span>
		          	</div>
		    	</div>
		        <div className="google-map">
		    		<GoogleMapComponent  lon={longitude} lat={latitude} />
		        </div>
		    </div>
	    )
	}

	return (
		<div className="info-detail" id="info-detail">
			{detailHTML}
        </div>
	);
}

export default InfoDetail;