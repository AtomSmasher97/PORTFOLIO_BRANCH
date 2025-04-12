import React from "react";

const ProjectCard = ({ icon, title, description, highlights, tools }) => {
  return (
    <div className="project-card">
      <div className="project-icon">{icon}</div>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-highlights">
        <span className="label">Highlights:</span> {highlights}
      </div>
      <div className="project-tools">
        <span className="label">Tools:</span> {tools}
      </div>
    </div>
  );
};

export default ProjectCard;
