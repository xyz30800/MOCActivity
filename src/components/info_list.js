import React, {Component} from 'react';
import InfoItem from './info_list_item';

const InfoList = ({infoList, onInfoSelect}) => {

	if (Object.keys(infoList).length === 0) {
		return <span className="warning">無資料</span>;
	}

	const infoItems = infoList.map(itemEach => {
		// console.log(itemEach)
		return (
			<InfoItem
				onInfoSelect={onInfoSelect}
				key={itemEach.UID}
				itemEach={itemEach}
			/>
		)
	});

	return (
		<div className="">
         	{infoItems}
        </div>
	);
}

export default InfoList;