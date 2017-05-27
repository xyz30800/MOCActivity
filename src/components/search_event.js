import React, {Component} from 'react';

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

export default SelectEvent;