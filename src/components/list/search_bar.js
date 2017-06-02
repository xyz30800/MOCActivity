import React, {Component} from 'react';

const SearchBar = ({fetchData}) => {

	const getSearchTerm = () => document.querySelector('#searchBar').value.trim();

	return (
		<div className="form-search">
          <input type="text" className="input-search" id="searchBar" placeholder="找活動 ?" onChange={() => fetchData(getSearchTerm())} />
          <span type="submit" className="icon-search" id="btn-sumbit"></span> 
        </div>
	);
}

export default SearchBar;