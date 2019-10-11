import React, { Component, Fragment } from "react";
import axios from "axios";
import Filters from "./Filters";
import MessageBox from "./MessageBox";
import VideoScreen from "./VideoScreen";
import VideoList from "./VideoList";
import { YOUTUBE_SEARCH_API_URL } from "../utils/config";

class VideosContainer extends Component {
  state = {
    videos: [],
    defaultList: [],
    selectedVideo: null,
    sortBy: "relevance",
    numberOfVideos: 10,
    isLoading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.handleSearch();
    }
  }

  /** This method sends GET request to Youtube API along with parameters and fetches corresponding results. */
  handleSearch = () => {
    if (this.props.searchQuery) {
      this.setState({ isLoading: true });
      const params = {
        key: process.env.REACT_APP_API_KEY,
        q: this.props.searchQuery,
        part: "snippet",
        type: "video",
        maxResults: this.state.numberOfVideos
      };
      axios
        .get(YOUTUBE_SEARCH_API_URL, { params: params })
        .then(response => {
          this.setState(
            {
              isLoading: false,
              selectedVideo: response.data.items[0],
              videos: response.data.items,
              defaultList: response.data.items
            },
            () => {
              this.sortVideos(this.state.sortBy);
            }
          );
        })
        .catch(error => {
          this.setState({
            isLoading: false,
            error
          });
        });
    }
  };

  /** Selected Video is the one which you can play. This method change the selected video to whichever video you click from the video list.*/
  changeSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  changeNumberOfVideos = selectedOption => {
    this.setState(
      {
        numberOfVideos: selectedOption
      },
      () => {
        this.handleSearch();
      }
    );
  };

  /** This method lets you change sorting parameter. */
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

  /** This method sorts the videolist based on selected sorting paramter. */
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
      videos: videos
    });
  };

  render() {
    const {
      videos,
      selectedVideo,
      error,
      isLoading,
      sortBy,
      numberOfVideos
    } = this.state;
    if (error) {
      return (
        <MessageBox icon="alert-triangle">
          Sorry, Something Went Wrong! Try Again.
        </MessageBox>
      );
    }
    return (
      <Fragment>
        <Filters
          sortBy={sortBy}
          changeSortBy={this.changeSortBy}
          numberOfVideos={numberOfVideos}
          changeNumberOfVideos={this.changeNumberOfVideos}
        />
        {isLoading ? (
          <MessageBox icon="loader">Loading...</MessageBox>
        ) : videos.length === 0 ? (
          <MessageBox>No videos to display. Search something!</MessageBox>
        ) : (
          <div className="videos-container">
            <VideoScreen selectedVideo={selectedVideo} />
            <VideoList
              videos={videos}
              changeSelectedVideo={this.changeSelectedVideo}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default VideosContainer;
