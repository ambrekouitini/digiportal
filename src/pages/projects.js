// projects.js

import React, { useState, useEffect, useMemo } from 'react';
import Nav from '../components/projects/nav';
import Content from '../components/projects/content';
import PreFooter from '../components/projects/preFooter';
import ScrollProvider from '../components/home/ScrollProvider';

const projectsData = [
    {
        title: 'Refonte du site B2C',
        brand: 'Beauterra',
        image: 'Beauterra.png',
        year: 2024,
        date: '2024-03-14',
        type: 'Site web',
        route: '/beauterra',
    },
    {
        title: 'Conception et développements',
        brand: 'Grand Large',
        image: 'GrandLarge.png',
        year: 2024,
        date: '2024-05-22',
        type: 'Application',
        route: '/grandlarge',
    },
    {
        title: 'Conception graphique',
        brand: 'Site Corporate',
        image: 'Intranet.png',
        year: 2024,
        date: '2024-01-09',
        type: 'Site web',
        route: '/sitecorporate',
    },
    {
        title: 'Refonte du site B2C',
        brand: 'Beauterra',
        image: 'Beauterra.png',
        year: 2024,
        date: '2024-06-18',
        type: 'Site web',
        route: '/beauterra',
    },
    {
        title: 'Conception et développements',
        brand: 'Grand Large',
        image: 'GrandLarge.png',
        year: 2024,
        date: '2024-02-05',
        type: 'Application',
        route: '/grandlarge',
    },
    {
        title: 'Conception graphique',
        brand: 'Site Corporate',
        image: 'Intranet.png',
        year: 2024,
        date: '2024-07-11',
        type: 'Site web',
        route: '/sitecorporate',
    },
    {
        title: 'Conception et développements',
        brand: 'Grand Large',
        image: 'GrandLarge.png',
        year: 2024,
        date: '2024-04-28',
        type: 'Application',
        route: '/grandlarge',
    },
    {
        title: 'Conception graphique',
        brand: 'Site Corporate',
        image: 'Intranet.png',
        year: 2024,
        date: '2024-09-03',
        type: 'Site web',
        route: '/sitecorporate',
    }
];

    

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [sortMethod, setSortMethod] = useState('noSort');

    const projects = useMemo(() => projectsData, []);

    useEffect(() => {
        const filterAndSortProjects = () => {
            let filtered = projects.filter(project => {
                const matchesCategory = selectedCategory === 'Tous' || project.type === selectedCategory;
                const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                      project.brand.toLowerCase().includes(searchTerm.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            switch(sortMethod) {
                case 'young':
                    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                    break;
                case 'old':
                    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                    break;
                case 'AZ':
                    filtered.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'ZA':
                    filtered.sort((a, b) => b.title.localeCompare(a.title));
                    break;
                default:
                    break;
            }

            return filtered;
        };

        setFilteredProjects(filterAndSortProjects());
    }, [selectedCategory, searchTerm, sortMethod, projects]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleSort = (sort) => {
        setSortMethod(sort);
    };

    return (
        <div>
            <ScrollProvider />
            <Nav 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
                searchProject={handleSearch}
                sortProject={handleSort}
            />
            <Content projects={filteredProjects} />
            <PreFooter />
        </div>
    );
};

export default ProjectsPage;