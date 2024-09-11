import { useState } from 'react';
import '../styles/projects.scss';
import Project from './use/project';

const Projects = () => {
  const projectsData = [
    {
      name: "beauterra",
      link: "beauterra.com",
      image: "beauterra.com/image"
    },
    // Add more projects here as needed
  ];

  return (
    <div className="projects">
      <div className="titleDiv">
        <h2>Nos projets</h2>
        <div className="button"></div>
      </div>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          projectName={project.name}
          projectLink={project.link}
          projectImage={project.image}
        />
      ))}
    </div>
  );
};

export default Projects;