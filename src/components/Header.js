import React from "react";
import SearchBar from "./SearchBar";
import FeatherIcon from "feather-icons-react";

/** renders Header which includes logo and searchbar. */
const Header = props => {
  const { changeSearchQuery } = props;
  return (
    <header className="header">
      <div className="header__logo show-for-desktop">
        <FeatherIcon icon="youtube" size={50} />
      </div>
      <SearchBar changeSearchQuery={changeSearchQuery} />
    </header>
  );
};

export default Header;
