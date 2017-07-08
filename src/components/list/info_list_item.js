import React, {Component} from 'react';
import PropTypes from 'prop-types';

const InfoItem = ({itemEach, onInfoSelect, searchTerm, selectTerm}) => {
  
  let thumbnailUrl = '';
  if (!itemEach.imageUrl){
    thumbnailUrl = require(`../../img/${selectTerm}.svg`);
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

InfoItem.propTypes = {
    itemEach: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.array
            ]),
    onInfoSelect: PropTypes.func,
    searchTerm: PropTypes.string,
    selectTerm: PropTypes.string
}

export default InfoItem;