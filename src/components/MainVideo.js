import React from "react";
import MessageBox from "./MessageBox";

const MainVideo = ({ selectedVideo: video }) => {
  if (!video) {
    return <MessageBox>Loading...</MessageBox>;
  }
  const videoId = video.id.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="main-video" key={videoId}>
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
