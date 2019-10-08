import React, { Component } from "react";
import Header from "./components/Header";
import axios from "axios";
class App extends Component {
  state = {
    searchQuery: "the local train",
    videos: [],
    selectedVideo: null
  };

  handleSearchQueryChange = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleSearch = () => {
    let API_URL = "https://www.googleapis.com/youtube/v3/search";
    if (this.state.searchQuery) {
      const params = {
        key: process.env.REACT_APP_API_KEY,
        q: this.state.searchQuery,
        part: "snippet",
        type: "video"
      };

      axios.get(API_URL, { params: params }).then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          searchQuery={this.state.searchQuery}
          handleSearchQueryChange={this.handleSearchQueryChange}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
