import React from "react";
import FeatherIcon from "feather-icons-react";

const Searchbar = props => {
  const { searchQuery, changeSearchQuery, handleSearch } = props;
  return (
    <div className="header__searchbar">
      <input
        type="text"
        placeholder="Search YouTube..."
        value={searchQuery}
        onChange={changeSearchQuery}
        className="header__searchbar--box"
      />
      <button onClick={handleSearch} className="header__searchbar--button">
        <FeatherIcon icon="search" size={18} />
      </button>
    </div>
  );
};

export default Searchbar;
