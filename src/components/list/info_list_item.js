import React, {Component} from 'react';

const InfoItem = ({itemEach, onInfoSelect, searchTerm, selectTerm}) => {
  console.log(selectTerm)
  let thumbnailUrl = '';
  if (!itemEach.imageUrl){
    thumbnailUrl = `../../img/${selectTerm}.svg`;
  } else {
    thumbnailUrl = itemEach.imageUrl;
  }

	return (
		<div onClick={() => onInfoSelect(itemEach)} className="info-each">
      <img className="event-thumbnail" src={thumbnailUrl} alt="" />
      <div className="event">
        <h2 className="event-date">{itemEach.startDate}</h2>
        <h2 className="event-title" dangerouslySetInnerHTML={{__html: itemEach.title.replace(searchTerm, `<b style="color: #F95959">${searchTerm}</b>`)}} />
      </div>
      <span className="icon-triangle-right"></span>        
    </div>
	);
}

export default InfoItem;