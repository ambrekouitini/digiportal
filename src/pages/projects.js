// projects.js

import React, { useState } from 'react';
import Header from '../components/projects/header';
import Content from '../components/projects/content';
import Footer from '../components/Footer';
import ScrollProvider from '../components/home/ScrollProvider';


const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const projects = [
        {
            title: 'Refonte du site B2C',
            brand: 'Beauterra',
            image: 'Beauterra.png',
            year: 2024,
            type: 'Site web',
            route: '/beauterra',
            size: 'medium'
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            image: 'GrandLarge.png',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
            size: 'big'
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            image: 'Intranet.png',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
            size: 'big'
        },
        {
            title: 'Refonte du site B2C',
            brand: 'Beauterra',
            image: 'Beauterra.png',
            year: 2024,
            type: 'Site web',
            route: '/beauterra',
            size: 'small'
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            image: 'GrandLarge.png',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
            size: 'big'
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            image: 'Intranet.png',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
            size: 'big'
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            image: 'GrandLarge.png',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
            size: 'medium'
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            image: 'Intranet.png',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
            size: 'big'
        }
    ];

    const filteredProjects = selectedCategory === 'Tous'
        ? projects
        : projects.filter(project => project.type === selectedCategory);

    return (
        <div>
            <ScrollProvider />
            <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Content projects={filteredProjects} />
            <div style={{ height: '100vh' }}></div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;