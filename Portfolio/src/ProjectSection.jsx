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
          title="Designer"
          description="I value clean design patterns and thoughtful interactions."
          highlights="UX, UI, Web, Apps, Logos"
          tools="Figma, Affinity Designer"
        />
        <ProjectCard
          icon={<FaCode size={28} />}
          title="Frontend Developer"
          description="I like to code from scratch and bring ideas to life in the browser."
          highlights="HTML, CSS, JS, React"
          tools="Vite, Tailwind, Git"
        />
        <ProjectCard
          icon={<FaUserFriends size={28} />}
          title="Mentor"
          description="I genuinely care about helping people grow in their craft."
          highlights="UX/UI, Product Design"
          tools="9+ years exp, 30+ courses"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
