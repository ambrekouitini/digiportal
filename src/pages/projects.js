// projects.js

import React, { useState, useEffect } from 'react';
import Header from '../components/projects/header';
import Content from '../components/projects/content';
import Footer from '../components/Footer';
import ScrollProvider from '../components/home/ScrollProvider';


const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);

    const projects = [
        {
            title: 'Refonte du site B2C',
            brand: 'Beauterra',
            image: 'Beauterra.png',
            year: 2024,
            type: 'Site web',
            route: '/beauterra',
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            image: 'GrandLarge.png',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            image: 'Intranet.png',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
        },
        {
            title: 'Refonte du site B2C',
            brand: 'Beauterra',
            image: 'Beauterra.png',
            year: 2024,
            type: 'Site web',
            route: '/beauterra',
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            image: 'GrandLarge.png',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            image: 'Intranet.png',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
        },
        {
            title: 'Conception et développements',
            brand: 'Grand Large',
            image: 'GrandLarge.png',
            year: 2024,
            type: 'Application',
            route: '/grandlarge',
        },
        {
            title: 'Conception graphique',
            brand: 'Site Corporate',
            image: 'Intranet.png',
            year: 2024,
            type: 'Site web',
            route: '/sitecorporate',
        }       
];

    useEffect(() => {
        const filterProjects = () => {
            return projects.filter(project => {
                const matchesCategory = selectedCategory === 'Tous' || project.type === selectedCategory;
                const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                      project.brand.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
            });
        };
    
        setFilteredProjects(filterProjects());
    }, [selectedCategory, searchTerm]);


    const handleSearch = (term) => {
        setSearchTerm(term);
    };


    return (
        <div>
            <ScrollProvider />
            <Header 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                searchProject={handleSearch}
                />
            <Content projects={filteredProjects} />
            <div style={{ height: '100vh' }}></div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;