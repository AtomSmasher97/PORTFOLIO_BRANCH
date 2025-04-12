import React from "react";
import "./CSS/PatternLinks.css";
import resumeImg from "./assets/resume.jpg";
import projectsImg from "./assets/Projects.jpg";
import contactMeImg from "./assets/ContactMe.jpg";
import aboutImg from "./assets/About.jpg";

const PatternLinks = () => {
  return (
    <div className="gallery">
      <img src={resumeImg} alt="Download my resume" />
      <img src={projectsImg} alt="See my Projects" />
      <img src={contactMeImg} alt="Contact me" />
      <img src={aboutImg} alt="About me" />
    </div>
  );
};

export default PatternLinks;