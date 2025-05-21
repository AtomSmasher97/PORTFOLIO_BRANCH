import { Routes, Route, useLocation } from 'react-router-dom';
import ModernNav from './ModernNav';
import BackgroundVideo from './BackgroundVideo';
import HoverTextLinks from './HoverTextLinks';
import Hero from './Hero';
import ProjectsSection from './ProjectSection';
import Contact from './ContactMe';
import Loading from "./Loading.jsx";
import { useEffect, useState } from 'react';
import BuildSection from './BuildSection';
import Work from './Work';  

function Home() {
  return (
    <div className="home-container">
      <Hero />
      <BackgroundVideo />
      <HoverTextLinks />
    </div>
  );
}

function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <BuildSection />
    </>
  );
}

function ContactPage() {
  return <Contact />;
}

function WorkPage() {
  return <Work />;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-active');
    } else {
      document.body.classList.remove('loading-active');
    }
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <ModernNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
