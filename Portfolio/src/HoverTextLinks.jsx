import React, { useEffect, useRef, useState } from "react";
import "./CSS/HoverTextLinks.css";
import resumeImg from "./assets/resume.jpg";
import projectsImg from "./assets/Projects.jpg";
import contactMeImg from "./assets/ContactMe.jpg";
import aboutImg from "./assets/About.jpg";
import resumeFile from "./assets/VENKATESWAR REDDY KOTHAPALLY.docx";
import { Link } from 'react-router-dom';

const linkData = [
  { id: 'resume', to: resumeFile, download: "VENKATESWAR REDDY KOTHAPALLY.docx", img: resumeImg, alt: "Download my resume", hoverText: "Download my Resume" },
  { id: 'projects', to: "/work", img: projectsImg, alt: "See my Projects", hoverText: "See my Projects" },
  { id: 'contact', to: "/contact", img: contactMeImg, alt: "Contact me", hoverText: "Contact Me" },
  { id: 'about', to: "/about", img: aboutImg, alt: "About me", hoverText: "Learn More About Me" },
];

const HoverTextLinks = () => {
  const galleryRef = useRef(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = galleryRef.current.querySelectorAll('.hover-gallery-item');
            items.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
            observer.unobserve(galleryRef.current);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="hover-links-section">
      <div className="hover-gallery" ref={galleryRef}>
        {linkData.map((link) => (
          <div
            key={link.id}
            className={`hover-gallery-item ${hoveredItemId === link.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredItemId(link.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <div className="image-container"> {}
              {link.download ? (
                <a href={link.to} download={link.download}>
                  <img src={link.img} alt={link.alt} />
                </a>
              ) : (
                <Link to={link.to}>
                  <img src={link.img} alt={link.alt} />
                </Link>
              )}
            </div>
            <div className="hover-text">
              {link.hoverText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverTextLinks;