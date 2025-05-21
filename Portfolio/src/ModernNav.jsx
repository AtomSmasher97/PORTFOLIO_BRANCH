import React, { useEffect, useRef } from "react";
import "./CSS/ModernNav.css";
import { Link } from 'react-router-dom';

const AnimatedNavbar = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = (e) => {
      cursor.classList.add("cursor--active");
    };

    const handleLeave = () => {
      cursor.classList.remove("cursor--active");
    };

    document.addEventListener("mousemove", handleMouseMove);
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleHover);
      link.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleHover);
        link.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/" className="nav-link"><span>Home</span></Link>
        <Link to="/projects" className="nav-link"><span>About</span></Link>
        <Link to="/work" className="nav-link"><span>Projects</span></Link>
        <Link to="/contact" className="nav-link"><span>Contact</span></Link>
      </nav>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default AnimatedNavbar;
