import React from "react";

const MainVideo = ({ selectedVideo: video }) => {
  if (!video) {
    return null;
  }
  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="main-video">
      <div className="main-video__iframe">
        <iframe
          title="iframe"
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="main-video__info">
        <div className="main-video__info--title">{video.snippet.title}</div>
        <div className="main-video__info--channel">
          {`By ${video.snippet.channelTitle}`}
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
