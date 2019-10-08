import React from "react";
import SearchBar from "./SearchBar";

const Header = props => {
  const { searchQuery, handleSearchQueryChange, handleSearch } = props;
  return (
    <header>
      <SearchBar
        searchQuery={searchQuery}
        handleSearchQueryChange={handleSearchQueryChange}
        handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header;
