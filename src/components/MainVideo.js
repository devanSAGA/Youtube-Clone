import React from "react";

const MainVideo = ({ selectedVideo: video }) => {
  if (!video) {
    return null;
  }

  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="main-video-container">
      <iframe
        width="800"
        height="500"
        src={videoURL}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MainVideo;
