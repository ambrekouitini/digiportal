import { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondPage from '../pages/projects';
import '../styles/projects.scss';
import Project from './use/project';

// Images
import imgBeauterra from '../assets/images/Beauterra.png';
import imgGrandLarge from '../assets/images/GrandLarge.png';
import imgIntranet from '../assets/images/Intranet.png';

const Projects = () => {
  const projectsData = [
    {
      name: "Refonte du site B2C - Beauterra",
      link: "https://beauterra.com/",
      image: imgBeauterra,
    },
    {
      name: "Conception et développements - Grand Large",
      link: "https://grand-large.info/",
      image: imgGrandLarge,
    },
    {
      name: "Conception graphique - Site Corporate",
      link: "https://mayolytoday.com/",
      image: imgIntranet,
    }
  ];

  return (
    <div className="projects">
      <div className="titleDiv">
        <h2>Nos projets</h2>
        <Link to="/projects"><div className="button"></div></Link>
      </div>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          projectName={project.name}
          projectLink={project.link}
          projectImage={project.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default Projects;