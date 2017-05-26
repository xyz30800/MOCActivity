import React, {Component} from 'react';
import InfoItem from './info_list_item';
import SearchBar from './search_bar';
import SelectBar from './select_bar';

const InfoList = ({infoList, fetchData, onInfoSelect, onActSelect}) => {

	let infoItems = '';
	if (Object.keys(infoList).length === 0) {
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
			{infoItems}
        </div>
	);
}

export default InfoList;