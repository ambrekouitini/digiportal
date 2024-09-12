import React from 'react';
import '../../styles/projects/content.scss';

import ProjectCard from '../use/projectCard.js';

const Content = ({ projects }) => {
    return (
        <div className="content">
            {projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    brand={project.brand}
                    image={project.image}
                    year={project.year}
                    type={project.type}
                    route={project.route}
                    size={project.size}
                />
            ))}
        </div>
    );
};

export default Content;