import React from "react";
import FeatherIcon from "feather-icons-react";

const Searchbar = props => {
  const { searchQuery, changeSearchQuery, handleSearch } = props;
  return (
    <div className="searchbar">
      <input type="text" value={searchQuery} onChange={changeSearchQuery} />
      <button onClick={handleSearch}>
        <FeatherIcon icon="search" size={18} />
      </button>
    </div>
  );
};

export default Searchbar;
