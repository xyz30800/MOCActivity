import React, {Component} from 'react';

const InfoItem = ({itemEach, onInfoSelect}) => {

  let thumbnailUrl = '';
  if (!itemEach.imageUrl){
    thumbnailUrl = '../../img/info-cover.png';
  } else {
    thumbnailUrl = itemEach.imageUrl;
  }

	return (
		<div onClick={() => onInfoSelect(itemEach)} className="info-each">
       <img className="event-thumbnail" src={thumbnailUrl} alt="" />
          <div className="event">
            <h2 className="event-date">{itemEach.startDate}</h2>
            <h2 className="event-title">{itemEach.title}</h2>
          </div>
          <span className="icon-triangle-right"></span>         
        </div>
	);
}

export default InfoItem;