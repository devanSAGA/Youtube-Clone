import React, { Component, Fragment } from "react";
import Filters from "./Filters";
import MessageBox from "./MessageBox";
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";
import axios from "axios";

class Videos extends Component {
  state = {
    videos: [],
    defaultList: [],
    selectedVideo: null,
    sortBy: "relevance",
    isLoading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.handleSearch();
    }
  }

  //This method sends GET request to Youtube API along with parameters and fetches corresponding results.
  handleSearch = () => {
    let API_URL = "https://www.googleapis.com/youtube/v3/search";
    if (this.props.searchQuery) {
      this.setState({ isLoading: true });
      const params = {
        key: process.env.REACT_APP_API_KEY,
        q: this.props.searchQuery,
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
            videos: response.data.items,
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

  //Selected Video is the one which you can play. This method change the selected video to whichever video you click from the video list.
  changeSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    });
  };

  //This method lets you change sorting parameter.
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

  //This method sorts the videolist based on selected sorting paramter.
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
      videos: videos
    });
  };

  render() {
    const { videos, selectedVideo, error, isLoading, sortBy } = this.state;
    if (error) {
      return (
        <MessageBox icon="alert-triangle">
          Sorry, Something Went Wrong! Try Again.
        </MessageBox>
      );
    }
    return isLoading ? (
      <MessageBox icon="loader">Loading...</MessageBox>
    ) : videos.length === 0 ? (
      <MessageBox>No videos to display. Search something!</MessageBox>
    ) : (
      <Fragment>
        <Filters sortBy={sortBy} changeSortBy={this.changeSortBy} />
        <div className="videos-container">
          <MainVideo selectedVideo={selectedVideo} />
          <VideoList
            videos={videos}
            changeSelectedVideo={this.changeSelectedVideo}
          />
        </div>
      </Fragment>
    );
  }
}

export default Videos;
