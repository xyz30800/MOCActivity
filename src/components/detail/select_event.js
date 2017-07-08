import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SelectEvent = ({eventsList, eventChange}) => {

	return (
		<select className="info-event" onChange={(e) => eventChange(e)}>
			{
				eventsList.map((event, index) => {
					return (
						<option value={index} key={index}>{event.time}</option>
					);
				})
			}
		</select>
	);
}

SelectEvent.propTypes = {
  	eventsList: PropTypes.oneOfType([
	            	PropTypes.object,
	            	PropTypes.array
	        	]),
  	eventChange: PropTypes.func
}

export default SelectEvent;