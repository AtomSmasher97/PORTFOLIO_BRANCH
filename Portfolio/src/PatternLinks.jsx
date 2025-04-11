import React from "react";
import "./CSS/PatternLinks.css";

const PatternLinks = () => {
  return (
    <div className="gallery">
      <img src={process.env.PUBLIC_URL + "/resume.jpg"} alt="Download my resume" />
      <img src={process.env.PUBLIC_URL + "/Projects.jpg"} alt="See my Projects" />
      <img src={process.env.PUBLIC_URL + "/ContactMe.jpg"} alt="Contact me" />
      <img src={process.env.PUBLIC_URL + "/About.jpg"} alt="About me" />
    </div>
  );
};  

export default PatternLinks;  
