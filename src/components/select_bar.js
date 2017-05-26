import React, {Component} from 'react';

const SelectBar = ({onActSelect}) => {

	const getSelectTerm = () => document.querySelector('#select-act').value

	return (
		<div className="form-select">
           	<select id="select-act" onChange={() => onActSelect(getSelectTerm())}>
				<option value="music-indie">獨立音樂</option>
				<option value="exhibition">展覽</option>
				<option value="music-act">音樂表演</option>
				<option value="concert">演唱會</option>
			</select>
        </div>
	);
}

export default SelectBar;