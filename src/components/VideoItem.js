import React from "react";
import { formateDate, trimText } from "../utils/functions";

const VideoItem = ({ video, changeSelectedVideo }) => {
  const videoThumbnail = video.snippet.thumbnails.high.url;
  return (
    <li className="video-item" onClick={() => changeSelectedVideo(video)}>
      <div className="video-item__thumbnail">
        <img
          className="video-item__thumbnail--image"
          alt="youtube-video-thumbnail"
          src={videoThumbnail}
        />
        <span className="video-item__thumbnail--text">Click to Play</span>
      </div>
      <div className="video-item__info">
        <span className="video-item__info--title">
          {trimText(video.snippet.title)}
        </span>
        <span className="video-item__info--date">
          {`on ${formateDate(video.snippet.publishedAt)}`}
        </span>
      </div>
    </li>
  );
};

export default VideoItem;
