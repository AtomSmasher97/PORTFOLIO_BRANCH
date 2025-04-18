import React from "react";
import { FaReact, FaTools, FaRocket, FaGithub } from "react-icons/fa";
import "./CSS/BuildSection.css";

const buildDetails = [
  {
    icon: <FaReact size={24} />,
    title: "Frontend",
    desc: "Built with React + Vite for speed, component modularity, and performance.",
  },
  {
    icon: <FaTools size={24} />,
    title: "Styling & Animation",
    desc: "Tailwind CSS and subtle transitions using Framer Motion and VanillaTilt.",
  },
  {
    icon: <FaRocket size={24} />,
    title: "Deployment",
    desc: "Deployed via GitHub Pages with CI using GitHub Actions.",
  },
  {
    icon: <FaGithub size={24} />,
    title: "Open Source",
    desc: "Code hosted on GitHub—easy for anyone to explore or fork.",
  },
];

const BuildSection = () => {
  return (
    <section className="build-section">
      <h2 className="build-heading">🔧 How I Built This Site</h2>
      <div className="build-grid">
        {buildDetails.map((item, idx) => (
          <div className="build-card" key={idx}>
            <div className="build-icon">{item.icon}</div>
            <h3 className="build-title">{item.title}</h3>
            <p className="build-desc">{item.desc}</p>
          </div>
        ))}
        <>
        </>
      </div>
        <p>Special thanks to youtube video creators and Saviours from codePen.  </p>    
        
        <div>
    </div>
    </section>
  );
};

export default BuildSection;
