import React from "react";
import ProjectCard from "./ProjectCard";
import "./CSS/ProjectSection.css";
import { FaCode, FaPaintBrush, FaUserFriends } from "react-icons/fa";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
      <ProjectCard
  icon={<FaPaintBrush size={28} />}
  title="UI-Oriented Developer"
  description="I focus on building user-friendly interfaces and seamless UX across platforms."
  highlights="Blazor, React, Tailwind CSS, Bootstrap"
  tools="Figma, Chart.js, Redux"
/>
<ProjectCard
  icon={<FaCode size={28} />}
  title="Full Stack Engineer"
  description="I build and deploy robust, scalable software using modern Java and .NET stacks."
  highlights="Java, Spring Boot, ASP.NET Core, SQL"
  tools="Docker, CI/CD, AWS, Azure"
/>
<ProjectCard
  icon={<FaUserFriends size={28} />}
  title="Collaborator & Problem Solver"
  description="I love working in agile teams and mentoring peers while building impactful systems."
  highlights="Team Leadership, Dev Mentorship, Clean Architecture"
  tools="GitHub Actions, Jira, Draw.io, SonarQube"
/>

      </div>
    </section>
  );
};

export default ProjectsSection;
