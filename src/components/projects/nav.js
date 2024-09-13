import React, { useEffect } from 'react';
import '../../styles/projects/nav.scss';

// Images
import search from '../../assets/images/search.svg';
import sort from '../../assets/images/sort.svg';

const Nav = ({ selectedCategory, setSelectedCategory, searchProject, sortProject }) => {
    const changeState = (category) => {
        setSelectedCategory(category);
    }

    useEffect(() => {
        const spans = document.querySelectorAll('.order span');
        spans.forEach(span => {
            if (span.textContent === selectedCategory) {
                span.style.backgroundColor = '#F9D224';
            } else {
                span.style.backgroundColor = 'white';
            }
        });
    }, [selectedCategory]);

    const handleSearch = (e) => {
        searchProject(e.target.value);
    }

    const handleSort = (e) => {
        console.log(e.target.value);
        sortProject(e.target.value);
    }

    return (
        <div className="nav">
            <h1>Nos projets</h1>
            <div className="navigation">
                <div className="order">
                    <span onClick={() => changeState('Tous')}>Tous</span>
                    <span onClick={() => changeState('Site web')}>Site web</span>
                    <span onClick={() => changeState('Application')}>Application</span>
                </div>
                <div className="search">
                    <div className='searchBar'>
                        <input type="text" placeholder="Rechercher un projet" onChange={handleSearch}  />
                        <img src={search} alt="search" />
                    </div>
                    <div className="sortSelect">
                        <select onChange={handleSort} defaultValue="noSort">
                            <option value="noSort">Ne pas trier</option>
                            <option value="young">Le plus récent</option>
                            <option value="old">Le plus ancien</option>
                            <option value="AZ">A-Z</option>
                            <option value="ZA">Z-A</option>
                        </select>
                        <img src={sort} alt="sort" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;