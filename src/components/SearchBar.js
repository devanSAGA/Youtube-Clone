import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";

class Searchbar extends Component {
  state = {
    inputText: ""
  };

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    const { changeSearchQuery } = this.props;
    return (
      <div className="header__searchbar">
        <input
          type="text"
          placeholder="Search YouTube..."
          value={this.state.inputText}
          onChange={this.handleChange}
          onKeyPress={event => {
            let keyCode = event.keyCode || event.which;
            if (keyCode === 13) {
              changeSearchQuery(this.state.inputText);
            }
          }}
          className="header__searchbar--box"
        />
        <button
          onClick={() => changeSearchQuery(this.state.inputText)}
          className="header__searchbar--button"
        >
          <FeatherIcon icon="search" size={18} />
        </button>
      </div>
    );
  }
}

export default Searchbar;
