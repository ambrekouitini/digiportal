import React from 'react';
import '../../styles/use/projectCard.scss';

const Project = ({ title, brand, image, year, type, route }) => {
  // Dynamic import should be done using require
  const projectImage = require(`../../assets/images/${image}`);

  return (
    <div className='projectCard' style={{ backgroundImage: `url(${projectImage})` }}>
        <span>{type}</span>
        <div>
            <div className='informations'>
                <h2>{title}</h2>
                <span>{brand}</span>
                <span>{year}</span>
            </div>
            <a href={route} className='button'></a>
        </div>
    </div>
  );
};

export default Project;