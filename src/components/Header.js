import React from "react";
import SearchBar from "./SearchBar";
import FeatherIcon from "feather-icons-react";

const Header = props => {
  const { searchQuery, changeSearchQuery, handleSearch } = props;
  return (
    <header className="header">
      <div className="header__logo show-for-desktop">
        <FeatherIcon icon="youtube" size={50} />
      </div>
      <SearchBar
        searchQuery={searchQuery}
        changeSearchQuery={changeSearchQuery}
        handleSearch={handleSearch}
      />
    </header>
  );
};

export default Header;
