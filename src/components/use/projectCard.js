import React from 'react';
import '../../styles/use/projectCard.scss';

const Project = ({ title, brand, image, year, type, route, size }) => {
  // Dynamic import should be done using require
  const projectImage = require(`../../assets/images/${image}`);

  return (
    <div className="projectCard">
        <div className={`container ${size}`} style={{ backgroundImage: `url(${projectImage})` }}>
            <div>
                <span className='type'>{type}</span>
                <div className='informations'>
                    <h2>{title}</h2>
                    <span>{brand}</span>
                    <span>{year}</span>
                </div>
                <a href={route} className='button'></a>
            </div>
        </div>
    </div>
  );
};

export default Project;