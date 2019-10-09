import React from "react";
import MainVideo from "./MainVideo";
import VideoList from "./VideoList";

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
