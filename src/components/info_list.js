import React, {Component} from 'react';
import InfoItem from './list/info_list_item';
import SearchBar from './list/search_bar';
import SelectBar from './list/select_bar';

const InfoList = ({infoList, fetchData, onInfoSelect, onActSelect, dataTotalLen}) => {

	let infoItems = '';
	const listLength = Object.keys(infoList).length;
	if (listLength === 0) {
		infoItems = (<span className="warning">無資料</span>);
	} else {
		infoItems = infoList.map(itemEach => {
			return (
				<InfoItem
					onInfoSelect={onInfoSelect}
					key={itemEach.UID}
					itemEach={itemEach}
				/>
			)
		});
	}

	return (
		<div className="info-list" id="info-list">
			<header className="header"><span className="icon-map2"></span>活動列表</header>
			<SelectBar onActSelect={onActSelect} />
			<SearchBar fetchData={fetchData} />
			<h2> {listLength} / {dataTotalLen} 筆</h2>
			{infoItems}
        </div>
	);
}

export default InfoList;