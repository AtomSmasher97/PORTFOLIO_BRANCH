import React from "react";
import "./CSS/BackgroundVideo.css";  

const BackgroundVideo = () => {
  return (
    <>
    <video autoPlay loop muted playsInline id="background-video">
  <source src="playback.webm"  type="video/webm" />
  Your browser does not support the video tag.
</video>
    <div className="blur-overlay"></div>
    <div className="grain-overlay"></div>
    </> 
  );
};

export default BackgroundVideo;
