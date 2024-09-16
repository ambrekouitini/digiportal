import React, { useState } from 'react';
import '../../styles/about/mission.scss';

const singleMission = [
    {
      name: 'Développement Web',
      number: '1',
      description: 'Nous vous accompagnons dans le processus de sélection d\'une agence web pour vos projets en mettant en place des critères de sélection clairs et pertinents, parfaitement alignés avec vos besoins spécifiques et vos budgets. Nous avons mis en place une liste des agences avec lesquelles Mayoly a déjà collaboré, offrant ainsi une vue d\'ensemble des partenaires potentiels. Notre réseau et de notre connaissance du marché, nous permet d\'identifier les meilleures options disponibles, vous assurant ainsi une sélection de confiance et bénéfique pour l\'entreprise.'
    },
    {
      name: 'Pilotage de projet',
      number: '2',
      description: 'Nous vous accompagnons dans le processus de sélection d\'une agence web pour vos projets en mettant en place des critères de sélection clairs et pertinents, parfaitement alignés avec vos besoins spécifiques et vos budgets. Nous avons mis en place une liste des agences avec lesquelles Mayoly a déjà collaboré, offrant ainsi une vue d\'ensemble des partenaires potentiels. Notre réseau et de notre connaissance du marché, nous permet d\'identifier les meilleures options disponibles, vous assurant ainsi une sélection de confiance et bénéfique pour l\'entreprise.'
    },
    {
      name: 'Choix de prestataire',
      number: '3',
      description: 'Nous vous accompagnons dans le processus de sélection d\'une agence web pour vos projets en mettant en place des critères de sélection clairs et pertinents, parfaitement alignés avec vos besoins spécifiques et vos budgets. Nous avons mis en place une liste des agences avec lesquelles Mayoly a déjà collaboré, offrant ainsi une vue d\'ensemble des partenaires potentiels. Notre réseau et de notre connaissance du marché, nous permet d\'identifier les meilleures options disponibles, vous assurant ainsi une sélection de confiance et bénéfique pour l\'entreprise.'
    },
    {
      name: 'Hébergement / Nom de domaine',
      number: '4',
      description: 'Nous vous accompagnons dans le processus de sélection d\'une agence web pour vos projets en mettant en place des critères de sélection clairs et pertinents, parfaitement alignés avec vos besoins spécifiques et vos budgets. Nous avons mis en place une liste des agences avec lesquelles Mayoly a déjà collaboré, offrant ainsi une vue d\'ensemble des partenaires potentiels. Notre réseau et de notre connaissance du marché, nous permet d\'identifier les meilleures options disponibles, vous assurant ainsi une sélection de confiance et bénéfique pour l\'entreprise.'
    }
];

const Mission = () => {
    const [activeMission, setActiveMission] = useState(null);
  
    const handleMissionClick = (index) => {
      setActiveMission(activeMission === index ? null : index);
    };
  
    const handleClose = () => {
      setActiveMission(null);
    };
  
    const getDisplayName = (name, isActive, isFolded) => {
      if (isActive) return name;
      if (isFolded) return name.split(' ')[0];
      return name;
    };
  
    return (
      <section className="mission">
        <div className="titleContainer">
          <h2>Nos missions</h2>
          <button className="button"></button>
        </div>
        <div className={`cardContainer ${activeMission !== null ? 'active' : ''}`}>
          {singleMission.map((mission, index) => {
            const isActive = activeMission === index;
            const isFolded = activeMission !== null && !isActive;
            const displayName = getDisplayName(mission.name, isActive, isFolded);
            
            return (
              <div
                key={index}
                className={`singleCard ${isActive ? 'active' : ''} ${isFolded ? 'folded' : ''}`}
                onClick={() => handleMissionClick(index)}
              >
                <div className="info">
                  {isFolded ? (
                    <div className="vertical-text">
                      {displayName.split('').map((char, i) => (
                        <span key={i}>{char}</span>
                      ))}
                    </div>
                  ) : (
                    <span>{displayName}</span>
                  )}
                  <span className='number'>{mission.number}</span>
                </div>
                {isActive && (
                  <div className="contenu">
                    <button className="closeButton" onClick={(e) => { e.stopPropagation(); handleClose(); }}></button>
                    <p>{mission.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default Mission;