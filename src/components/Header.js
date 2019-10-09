import React from "react";
import SearchBar from "./SearchBar";

const Header = props => {
  const { searchQuery, changeSearchQuery, handleSearch } = props;
  return (
    <header>
      <SearchBar
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
        handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header;
