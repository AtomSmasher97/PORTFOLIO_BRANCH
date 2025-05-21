import React from 'react';
import Tilt from 'react-parallax-tilt';
import WorkData from './WorkData'; 

const Work = () => {
  return (
    <div className="min-h-screen p-8 bg-[#0f0f0f] text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {WorkData.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={700}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-xl"
          >
            <img src={project.image} alt={project.title} className="rounded-xl mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-2 text-gray-300">{project.description}</p>
            <p className="mb-4 text-sm text-gray-400"><strong>Tech:</strong> {project.tech.join(', ')}</p>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" className="text-blue-400 hover:underline">GitHub</a>
               
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Work;
