import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const { videos, changeSelectedVideo } = props;
  return (
    <ul className="video-list">
      {videos.map((video, index) => (
        <VideoItem
          video={video}
          key={`video-${index}`}
          changeSelectedVideo={changeSelectedVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;
