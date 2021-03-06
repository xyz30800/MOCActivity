import React, {Component} from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({fetchData}) => {

	return (
		<div className="form-search">
      <input 
        type="text" 
        className="input-search" 
        id="searchBar" 
        placeholder="找活動 ?" 
        onChange={(e) => fetchData(e.target.value.trim())}
      />
      <span type="submit" className="icon-search" id="btn-sumbit"></span> 
    </div>
	);
}

SearchBar.propTypes = {
    fetchData: PropTypes.func
}

export default SearchBar;