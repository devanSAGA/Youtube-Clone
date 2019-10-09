import React from "react";

const VideoItem = ({ video, changeSelectedVideo }) => {
  const videoThumbnail = video.snippet.thumbnails.high.url;
  return (
    <li className="video-item" onClick={() => changeSelectedVideo(video)}>
      <img
        className="video-item--thumbnail"
        alt="youtube-video-thumbnail"
        src={videoThumbnail}
      />
      <div className="video-item--info">{video.snippet.title}</div>
    </li>
  );
};

export default VideoItem;
