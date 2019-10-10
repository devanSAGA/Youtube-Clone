import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MessageBox from "./components/MessageBox";
import Videos from "./components/Videos";
import axios from "axios";
class App extends Component {
  state = {
    searchQuery: "",
    videos: [],
    defaultList: [],
    selectedVideo: null,
    sortBy: "relevance",
    isLoading: false,
    error: null
  };

  changeSearchQuery = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleSearch = () => {
    let API_URL = "https://www.googleapis.com/youtube/v3/search";
    if (this.state.searchQuery) {
      this.setState({ isLoading: true });
      const params = {
        key: process.env.REACT_APP_API_KEY,
        q: this.state.searchQuery,
        part: "snippet",
        type: "video",
        maxResults: 25
      };
      axios
        .get(API_URL, { params: params })
        .then(response => {
          this.setState({
            isLoading: false,
            selectedVideo: response.data.items[0],
            videos: response.data.items.slice(1),
            defaultList: response.data.items
          });
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error
          });
        });
    }
  };

  changeSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    });
  };

  changeSortBy = selectedOption => {
    this.setState(
      {
        sortBy: selectedOption
      },
      () => {
        this.sortVideos(this.state.sortBy);
      }
    );
  };

  sortVideos = sortBy => {
    let videos = this.state.defaultList.slice();
    if (sortBy === "date") {
      videos.sort((videoA, videoB) => {
        return (
          new Date(videoB.snippet.publishedAt) -
          new Date(videoA.snippet.publishedAt)
        );
      });
    } else if (sortBy === "title") {
      videos.sort((videoA, videoB) => {
        const titleA = videoA.snippet.title.toLowerCase();
        const titleB = videoB.snippet.title.toLowerCase();
        return titleA < titleB ? -1 : 1;
      });
    }
    this.setState({
      selectedVideo: videos[0],
      videos: videos.slice(1)
    });
  };

  render() {
    const {
      searchQuery,
      videos,
      selectedVideo,
      sortBy,
      isLoading
    } = this.state;
    return (
      <div className="App">
        <Header
          searchQuery={searchQuery}
          changeSearchQuery={this.changeSearchQuery}
          handleSearch={this.handleSearch}
        />
        {isLoading ? (
          <MessageBox icon="loader">Loading...</MessageBox>
        ) : videos.length === 0 ? (
          <MessageBox>No videos to display. Search something!</MessageBox>
        ) : (
          <Fragment>
            <Filters sortBy={sortBy} changeSortBy={this.changeSortBy} />
            <Videos
              videos={videos}
              selectedVideo={selectedVideo}
              changeSelectedVideo={this.changeSelectedVideo}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
