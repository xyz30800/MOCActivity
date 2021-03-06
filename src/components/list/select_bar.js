import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SelectBar = ({onActSelect}) => {

	return (
		<div className="form-select">
           	<select id="select-act" onChange={(e) => onActSelect(e.target.value)}>
				<option value="music-indie">獨立音樂</option>
				<option value="exhibition">展覽</option>
				<option value="music-act">音樂表演</option>
				<option value="concert">演唱會</option>
			</select>
        </div>
	);
}

SelectBar.propTypes = {
    onActSelect: PropTypes.func
}

export default SelectBar;