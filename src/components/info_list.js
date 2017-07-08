import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InfoItem from './list/info_list_item';
import SearchBar from './list/search_bar';
import SelectBar from './list/select_bar';

const InfoList = ({infoList, fetchData, onInfoSelect, onActSelect, dataTotalLen, searchTerm, selectTerm}) => {
	
	let infoItems = '';
	const listLength = Object.keys(infoList).length;
	if (listLength === 0) {
		infoItems = (<span className="warning">無資料</span>);
	} else {
		infoItems = infoList.map(itemEach => {
			return (
				<InfoItem
					key={itemEach.UID}
					onInfoSelect={onInfoSelect}
					itemEach={itemEach}
					searchTerm={searchTerm}
					selectTerm={selectTerm}
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

InfoList.propTypes = {
  	infoList: PropTypes.oneOfType([
	            PropTypes.object,
	            PropTypes.array
	        ]),
  	fetchData: PropTypes.func,
  	onInfoSelect: PropTypes.func,
  	onActSelect :PropTypes.func,
  	dataTotalLen: PropTypes.number,
  	searchTerm: PropTypes.string,
  	selectTerm: PropTypes.string
}

export default InfoList;