import React, { Component } from "react";
import Header from "./components/Header";
import Videos from "./components/Videos";
import axios from "axios";
import "./App.css";
class App extends Component {
  state = {
    searchQuery: "",
    videos: [],
    selectedVideo: null
  };

  changeSearchQuery = event => {
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
        type: "video",
        maxResults: 25
      };

      axios.get(API_URL, { params: params }).then(response => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      });
    }
  };

  changeSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    const { searchQuery, videos, selectedVideo } = this.state;
    return (
      <div className="App">
        <Header
          searchQuery={searchQuery}
          changeSearchQuery={this.changeSearchQuery}
          handleSearch={this.handleSearch}
        />
        <Videos
          videos={videos}
          selectedVideo={selectedVideo}
          changeSelectedVideo={this.changeSelectedVideo}
        />
      </div>
    );
  }
}

export default App;
