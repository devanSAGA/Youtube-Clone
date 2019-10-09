import React from "react";
import VideoList from "./VideoList";
import MainVideo from "./MainVideo";

const Videos = props => {
  const { videos, selectedVideo, changeSelectedVideo } = props;
  return (
    <div className="videos-container">
      <MainVideo selectedVideo={selectedVideo} />
      <VideoList videos={videos} changeSelectedVideo={changeSelectedVideo} />
    </div>
  );
};

export default Videos;
