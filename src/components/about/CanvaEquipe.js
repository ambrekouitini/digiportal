import React, { useState, useRef, useEffect} from 'react';
import Draggable from 'react-draggable';
import '../../styles/about/canvaEquipe.scss';

import brevinImg from '../../assets/images/Brevin.png';
import azedineImg from '../../assets/images/Azedine.png';
import ambreImg from '../../assets/images/Ambre.png';
import anhThaoImg from '../../assets/images/AnhThao.png';

const teamMembers = [
  {
    name: 'Brévin',
    surname: 'Renaud',
    image: brevinImg,
    tags: ['Développeur Full-stack', 'Alternant'],
    description: 'Actuellement en troisième année à l\'IIM, où il étudie un bachelor Chef de projet digital spécialisé dans le développement web, Brévin a intégré Mayoly en mai 2023 en tant que stagiaire et debut Septembre en alternance. Son rôle consiste à superviser le développement de différents sites web (institutionnels, B2B, B2C) ainsi que nos applications NoCode.'
  },
  {
    name: 'Azedine',
    surname: 'Aichaoui',
    image: azedineImg,
    tags: ['Chef de Projet Digital', 'Responsable du pôle'],
    description: 'Chez Mayoly depuis 15 ans au sein du pôle infrastructure de l\'IT, en tant qu\'ingénieur Systèmes et Réseaux. Azedine est, depuis novembre 2022, à la tête du pôle Digital au sein de la DDSI, sous la direction de Julien RAGEY. Son bagage en gestion de projets digitaux et culture du Web en font un leader qualifié pour diriger et développer ce département.'
  },
  {
    name: 'Ambre',
    surname: 'Kouitini',
    image: ambreImg,
    tags: ['Développeuse Full-stack', 'Alternante'],
    description: 'Étudiante en 3ème année à l\'IIM en Coding Digital Innovation, Ambre a rejoint Mayoly en octobre 2023 en tant qu\'alternante. Sa mission première : faire évoluer le site intranet. Sa passion pour le codage va au-delà des lignes de code. Spécialisée en Front-End, elle excelle dans l\'UI/UX, le design graphique et la création de maquettes.'
  },
  {
    name: 'Anh-Thao',
    surname: 'Mai',
    image: anhThaoImg,
    tags: ['Cheffe de Projet', 'Digital / Web'],
    description: 'Après 4 ans d\'expérience en tant que cheffe de projets web en agences, Anh-Thao maîtrise parfaitement la conception web et l\'UX/UI. Elle supervise désormais la gestion des projets digitaux internes, en étroite collaboration avec les différents métiers. Son expertise et son engagement font d\'elle un élément clé pour mener à bien les initiatives numériques de l\'entreprise.'
  }
];

const TeamMemberCard = ({ name, surname, image, tags, description, zIndex, onDragStart, onDragStop }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="parent"
      onStart={onDragStart}
      onStop={onDragStop}
    >
      <div ref={nodeRef} className='singleCard' style={{ zIndex }}>
        <div className="cardImage">
          <img src={image} alt={`${name} ${surname}`} className="idImg" />
          <span>{name}</span>
          <span>{surname}</span>
        </div>
        <div className="cardTextContainer">
          <div className='TagContainer'>
            {tags.map((tag, index) => (
              <div key={index} className='tag'>{tag}</div>
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Draggable>
  );
};

const CanvaEquipe = () => {
  const [zIndexes, setZIndexes] = useState(teamMembers.map((_, index) => index + 1));
  const [velocities, setVelocities] = useState(teamMembers.map(() => ({ x: 0, y: 0 })));
  const cardRefs = useRef(teamMembers.map(() => ({ x: 0, y: 0 })));

  const handleDragStart = (index) => {
    const newZIndexes = [...zIndexes];
    const maxZIndex = Math.max(...newZIndexes);
    newZIndexes[index] = maxZIndex + 1;
    setZIndexes(newZIndexes);
  };

  const handleDragStop = (index, e, data) => {
    const deltaX = data.x - cardRefs.current[index].x;
    const deltaY = data.y - cardRefs.current[index].y;
    const newVelocities = [...velocities];
    newVelocities[index] = { x: deltaX, y: deltaY };
    setVelocities(newVelocities);
    cardRefs.current[index] = { x: data.x, y: data.y };
  };

  useEffect(() => {
    const animateCards = () => {
      const newVelocities = velocities.map((velocity, index) => {
        const friction = 0.95;
        const newVelocity = {
          x: velocity.x * friction,
          y: velocity.y * friction
        };

        if (Math.abs(newVelocity.x) < 0.1 && Math.abs(newVelocity.y) < 0.1) {
          return { x: 0, y: 0 };
        }

        const cardRef = cardRefs.current[index];
        const newX = cardRef.x + newVelocity.x;
        const newY = cardRef.y + newVelocity.y;

        // Vérifiez les limites ici si nécessaire

        cardRef.x = newX;
        cardRef.y = newY;

        if (cardRef.current) {
          cardRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }

        return newVelocity;
      });

      setVelocities(newVelocities);

      if (newVelocities.some(v => v.x !== 0 || v.y !== 0)) {
        requestAnimationFrame(animateCards);
      }
    };

    if (velocities.some(v => v.x !== 0 || v.y !== 0)) {
      requestAnimationFrame(animateCards);
    }
  }, [velocities]);

  return (
    <section className="canvaEquipe">
      <div className="titleContainer">
        <h2>Notre équipe</h2>
      </div>
      <div className="cardContainer">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            {...member}
            zIndex={zIndexes[index]}
            onDragStart={() => handleDragStart(index)}
            onDragStop={(e, data) => handleDragStop(index, e, data)}
          />
        ))}
      </div>
    </section>
  );
};

export default CanvaEquipe;