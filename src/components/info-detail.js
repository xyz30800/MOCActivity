import React, {Component} from 'react';

const infoDetail = (props) => {

	return (
		<div className="">
			<div className="header">
	          	<header id="detail-header"><span className="icon-bullhorn"></span>活動細節</header>
	          	<select className="info-event">
	            	<option value="volvo">Volvo</option>
	            	<option value="saab">Saab</option>
	            	<option value="mercedes">Messssssssssssssrcedes</option>
	            	<option value="audi">Audi</option>
	          	</select>
	        </div>
	        <div className="describe">
	          	<div className="describe-col">
	            	<span className="describe-title"><span className="icon-pacman"></span> 時間</span>
	            	<span className="describe-cont">2017/05/11 19:00:00</span>
	          	</div>
	          	<div className="describe-col">
	            	<span className="describe-title"><span className="icon-pacman"></span> 活動名稱</span>
	            	<span className="describe-cont">【2017 ESP x 大村孝佳 電吉他講習會】</span>
	          	</div>
	         	<div className="describe-col">
	           		<span className="describe-title"><span className="icon-pacman"></span> 地點</span>
	            	<span className="describe-cont">河岸留言-西門紅樓展演館</span>
	          	</div>
	          	<div className="describe-col">
	            	<span className="describe-title"><span className="icon-pacman"></span> 內容</span>
	           		<span className="describe-cont">【2017 ESP x 大村孝佳 電吉他講習會】 【2017 ESP x 大村孝佳 電吉他講習會】\r\n \r\n 2017/5/11 即將首度登台表演講習的日本「光速吉他手」大村孝佳 （Takayoshi Ohmura），是新生代力量金屬、新古典金屬的天才型吉他英雄，</span>
	          	</div>
	          	<div className="describe-col">
	            	<span className="describe-title"><span className="icon-pacman"></span> 售票資訊</span>
	            	<span className="describe-cont">NT$250 <a href="http://www.haikuo.com.tw/events/20170511_ESP_Takayoshi/"><b className="icon-directions_run"></b>購票網站</a></span>
	         	 </div>
	          	<div className="describe-col">
	            	<span className="describe-title"><span className="icon-pacman"></span> 主辦單位 </span>
	            	<span className="describe-cont">樹谷生活科學館 <a href="http://gutsimprov.com"><b className="icon-directions_run"></b>活動網站</a></span>
	          	</div>
	         	<div className="describe-col">
	            	<span className="describe-title"><span className="icon-pacman"></span> 地址 </span>
	            	<span className="describe-cont">臺南市新市區中心路8號</span>
	          	</div>
	    	</div>
	        <div className="google-map">
	    		<img src="http://cloud.culture.tw/h_upload_ccacloud/ccacloud/image/A0/B0/C-1/D-827/E-457/F-670/1492821160112.png" alt="" />
	        </div>
        </div>
	);
}

export default infoDetail;