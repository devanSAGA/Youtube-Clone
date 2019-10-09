import React from "react";

const VideoItem = ({ video, changeSelectedVideo }) => {
  const videoThumbnail = video.snippet.thumbnails.default.url;
  return (
    <li className="video-item" onClick={() => changeSelectedVideo(video)}>
      <div className="video-item--thumbnail">
        <img alt="youtube-video-thumbnail" src={videoThumbnail} />
      </div>
      <div className="video-item--info">{video.snippet.title}</div>
    </li>
  );
};

export default VideoItem;
