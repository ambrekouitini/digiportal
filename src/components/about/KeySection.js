import React, { useState } from 'react';
import '../../styles/about/keySection.scss';
import starImg from '../../assets/images/star.png';
import starYellowImg from '../../assets/images/starYellow.png';

const KeySection = () => {
  const [hoveredKey, setHoveredKey] = useState(null);

  const leftContainerItems = [
    'Accompagnement',
    'Projets',
    'Réalisations',
    'Optimisation',
    'Personnalisation',
    'Organisation',
    'Stratégie'
  ];

  const rightContainerItems = [
    'Nous concevons des sites reflétant vos besoins et vos envies.',
    'Nous vous accompagnons dans la réalisation de vos idées.',
    'Créer et conseiller pour atteindre le meilleur du web et du digital'
  ];

  return (
    <section className="keySection">
      <div className="mainContainer">
        <div className="containerLeft">
          {leftContainerItems.map((item, index) => (
            <span key={index} className={index === 0 ? 'first-item' : ''}>
              {item}
            </span>
          ))}
        </div>
        <div className="containerRight">
          {rightContainerItems.map((item, index) => (
            <div
              key={index}
              className='singleKey'
              onMouseEnter={() => setHoveredKey(index)}
              onMouseLeave={() => setHoveredKey(null)}
            >
              <img 
                src={hoveredKey === index ? starYellowImg : starImg} 
                alt="star" 
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySection;