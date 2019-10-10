import React from "react";
import { formateDate } from "../utils/functions";

const VideoScreen = ({ selectedVideo: video }) => {
  if (!video) {
    return null;
  }
  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-screen" key={videoId}>
      <div className="video-screen__iframe">
        <iframe
          title="iframe"
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-screen__info">
        <div className="video-screen__info--title">{video.snippet.title}</div>
        <span className="video-screen__info--channel">
          {`By ${video.snippet.channelTitle} `}
        </span>
        <span className="video-screen__info--date">
          {`on ${formateDate(video.snippet.publishedAt)}`}
        </span>
      </div>
    </div>
  );
};

export default VideoScreen;
