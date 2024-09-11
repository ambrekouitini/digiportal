// projects.js

import React, { useState } from 'react';
import Header from '../components/projects/header';
import Content from '../components/projects/content';

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const projects = [
        {
            title: 'Refonte du site B2C',
            brand: 'Beauterra',
            year: 2024,
            type: 'Site web',
            route: '/beauterra',
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
        }
    ];

    const filteredProjects = selectedCategory === 'Tous'
        ? projects
        : projects.filter(project => project.type === selectedCategory);

    return (
        <div>
            <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Content projects={filteredProjects} />
        </div>
    );
};

export default ProjectsPage;